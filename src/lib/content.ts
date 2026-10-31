// Shared copy reused across pages.
import { FileClock, KeyRound, MapPin, Monitor, Send, UserCheck } from "lucide-react";
import { PRODUCT_NAME, PRODUCT_PATH } from "@/lib/site";

export const retinaLoopCard = {
  status: "pilot" as const,
  statusLabel: "Pilot · Ontario",
  name: PRODUCT_NAME,
  body: "Diabetic eye-care recall, report-back and referral for optometry and retina clinics. Finds overdue patients, books them back in, and keeps family doctors and specialists in the loop.",
  tags: ["Recall", "GP report-back", "Triaged referrals", "Windows"],
  linkLabel: `Explore ${PRODUCT_NAME}`,
  to: PRODUCT_PATH,
};

export const platformTiles = [
  { icon: Monitor, title: "Windows-native clients", body: "Fast, installed apps built for the PCs clinics already run." },
  { icon: MapPin, title: "Canadian data residency", body: "Cloud services hosted in Canada." },
  { icon: FileClock, title: "Audit by default", body: "Every access to a patient record is logged." },
  { icon: KeyRound, title: "MFA for every user", body: "No shared logins, no exceptions." },
  { icon: Send, title: "Real-world rails", body: "Secure fax, SMS and email built in, because healthcare still runs on them." },
  { icon: UserCheck, title: "Clinician in control", body: "Our software suggests; clinicians decide. No automated diagnosis." },
];
