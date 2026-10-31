import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { trackPilotSubmit } from "@/lib/analytics";
import { PHI_NOTE, PHONE_DISPLAY, PRODUCT_NAME } from "@/lib/site";

const roles = ["Optometrist", "Ophthalmologist / retina specialist", "Clinic manager", "Owner", "Other"];
const clinicTypes = ["Optometry", "Retina / ophthalmology", "Multidisciplinary"];
const locations = ["1", "2 to 3", "4 to 10", "10+"];
const imaging = ["Yes", "No", "Not sure"];

type Errors = Partial<Record<string, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputCls =
  "bg-background border text-foreground text-base p-3.5 outline-none focus:border-primary transition-colors rounded-md w-full";

const Field = ({
  label,
  name,
  optional,
  error,
  children,
  full,
}: {
  label: string;
  name: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
  full?: boolean;
}) => (
  <div className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
    <label htmlFor={`pilot-${name}`} className="text-[11px] tracking-[3px] text-faint uppercase">
      {label}
      {optional && <span className="normal-case tracking-normal text-faint/80"> (optional)</span>}
    </label>
    {children}
    {error && (
      <span id={`pilot-${name}-error`} className="text-xs text-destructive">
        {error}
      </span>
    )}
  </div>
);

const PilotForm = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) || "").trim();

    const data = {
      name: v("name"),
      role: v("role"),
      clinic: v("clinic"),
      city: v("city"),
      clinicType: v("clinicType"),
      locations: v("locations"),
      emr: v("emr"),
      imaging: v("imaging"),
      email: v("email"),
      phone: v("phone"),
      notes: v("notes"),
      consent: fd.get("consent") === "on",
    };

    const next: Errors = {};
    if (!data.name) next.name = "Please enter your full name.";
    if (!data.role) next.role = "Please choose your role.";
    if (!data.clinic) next.clinic = "Please enter your clinic name.";
    if (!data.city) next.city = "Please enter your city.";
    if (!data.clinicType) next.clinicType = "Please choose a clinic type.";
    if (!data.locations) next.locations = "Please choose the number of locations.";
    if (!data.email) next.email = "Please enter your work email.";
    else if (!EMAIL_RE.test(data.email)) next.email = "Please enter a valid email address.";
    if (!data.consent) next.consent = "Please confirm we can contact you about the pilot.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`);
      first?.focus();
      return;
    }

    const intent = data.clinicType === "Retina / ophthalmology" ? "pilot-ret" : "pilot-od";
    const prefix = intent === "pilot-ret" ? "[PILOT-RET]" : "[PILOT-OD]";
    const message = [
      `Intent: ${prefix} ${PRODUCT_NAME} founding cohort`,
      `Role: ${data.role}`,
      `Clinic: ${data.clinic}`,
      `City: ${data.city}`,
      `Clinic type: ${data.clinicType}`,
      `Locations: ${data.locations}`,
      `EMR / practice software: ${data.emr || "-"}`,
      `Fundus camera or OCT: ${data.imaging || "-"}`,
      `Phone: ${data.phone || "-"}`,
      `Consent to contact: yes`,
      "",
      "Notes:",
      data.notes || "-",
    ].join("\n");

    setSubmitting(true);
    setFailed(false);
    try {
      const { error } = await supabase.functions.invoke("send-contact-request", {
        body: {
          name: data.name.slice(0, 120),
          contact: data.email.slice(0, 200),
          clientType: data.clinicType,
          urgency: "Pilot",
          message: message.slice(0, 5000),
          source: "retinaloop-pilot",
          intent,
        },
      });
      if (error) throw error;
      trackPilotSubmit({ clinic_type: data.clinicType, locations: data.locations });
      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div role="status" className="bg-surface2 border-2 border-primary/50 rounded-xl p-8 md:p-10 text-center">
        <div className="font-mono text-[12px] tracking-[3px] text-primary uppercase mb-3">// request received</div>
        <p className="font-display text-2xl text-foreground mb-2">Thanks. We'll reply within two business days to book a 20-minute call.</p>
      </div>
    );
  }

  const err = (k: string) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `pilot-${k}-error` } : {});
  const border = (k: string) => (errors[k] ? "border-destructive" : "border-border");

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-surface2 border-2 border-primary/40 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.35)] rounded-xl p-6 md:p-9"
    >
      <Field label="Full name" name="name" error={errors.name}>
        <input id="pilot-name" name="name" type="text" maxLength={120} autoComplete="name" className={`${inputCls} ${border("name")}`} {...err("name")} />
      </Field>
      <Field label="Role" name="role" error={errors.role}>
        <select id="pilot-role" name="role" defaultValue="" className={`${inputCls} ${border("role")}`} {...err("role")}>
          <option value="" disabled>Select your role…</option>
          {roles.map((r) => <option key={r}>{r}</option>)}
        </select>
      </Field>
      <Field label="Clinic name" name="clinic" error={errors.clinic}>
        <input id="pilot-clinic" name="clinic" type="text" maxLength={160} autoComplete="organization" className={`${inputCls} ${border("clinic")}`} {...err("clinic")} />
      </Field>
      <Field label="City" name="city" error={errors.city}>
        <input id="pilot-city" name="city" type="text" maxLength={80} autoComplete="address-level2" className={`${inputCls} ${border("city")}`} {...err("city")} />
      </Field>
      <Field label="Clinic type" name="clinicType" error={errors.clinicType}>
        <select id="pilot-clinicType" name="clinicType" defaultValue="" className={`${inputCls} ${border("clinicType")}`} {...err("clinicType")}>
          <option value="" disabled>Select clinic type…</option>
          {clinicTypes.map((r) => <option key={r}>{r}</option>)}
        </select>
      </Field>
      <Field label="Number of locations" name="locations" error={errors.locations}>
        <select id="pilot-locations" name="locations" defaultValue="" className={`${inputCls} ${border("locations")}`} {...err("locations")}>
          <option value="" disabled>Select…</option>
          {locations.map((r) => <option key={r}>{r}</option>)}
        </select>
      </Field>
      <Field label="EMR or practice software you use" name="emr" optional>
        <input id="pilot-emr" name="emr" type="text" maxLength={120} className={`${inputCls} border-border`} />
      </Field>
      <Field label="Do you have a fundus camera or OCT?" name="imaging" optional>
        <select id="pilot-imaging" name="imaging" defaultValue="" className={`${inputCls} border-border`}>
          <option value="">Select…</option>
          {imaging.map((r) => <option key={r}>{r}</option>)}
        </select>
      </Field>
      <Field label="Work email" name="email" error={errors.email}>
        <input id="pilot-email" name="email" type="email" maxLength={200} autoComplete="email" className={`${inputCls} ${border("email")}`} {...err("email")} />
      </Field>
      <Field label="Phone" name="phone" optional>
        <input id="pilot-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={`${inputCls} border-border`} />
      </Field>
      <Field label="Anything we should know?" name="notes" optional full>
        <textarea id="pilot-notes" name="notes" maxLength={2000} className={`${inputCls} border-border resize-none h-28`} />
      </Field>

      <div className="md:col-span-2 flex flex-col gap-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            name="consent"
            type="checkbox"
            className="mt-1 w-4 h-4 accent-[hsl(var(--primary))] flex-shrink-0"
            {...err("consent")}
          />
          <span className="text-sm text-foreground">I agree to be contacted about the {PRODUCT_NAME} pilot.</span>
        </label>
        {errors.consent && (
          <span id="pilot-consent-error" className="text-xs text-destructive">
            {errors.consent}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="md:col-span-2 w-full font-mono text-[14px] tracking-[3px] text-primary-foreground bg-primary py-4 uppercase cursor-pointer hover:bg-primary/85 transition-colors border-none rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Request a pilot spot →"}
      </button>

      {failed && (
        <p role="alert" className="md:col-span-2 text-sm text-destructive text-center">
          We couldn't send your request. Please try again, or call {PHONE_DISPLAY}.
        </p>
      )}

      <p className="md:col-span-2 text-xs text-faint text-center">{PHI_NOTE}</p>
    </form>
  );
};

export default PilotForm;
