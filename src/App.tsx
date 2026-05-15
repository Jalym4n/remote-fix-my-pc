import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BitlockerRecovery from "./pages/BitlockerRecovery.tsx";
import ITServices from "./pages/ITServices.tsx";
import AILabs from "./pages/AILabs.tsx";
import ContactPage from "./pages/Contact.tsx";
import GetHelpPage from "./pages/GetHelp.tsx";
import Privacy from "./pages/Privacy.tsx";
import NoFixNoFee from "./pages/NoFixNoFee.tsx";
import DataRecovery from "./pages/DataRecovery.tsx";
import BusinessIT from "./pages/BusinessIT.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bitlocker-recovery" element={<BitlockerRecovery />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/ai-labs" element={<AILabs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-help" element={<GetHelpPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/no-fix-no-fee" element={<NoFixNoFee />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/business-it" element={<BusinessIT />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
