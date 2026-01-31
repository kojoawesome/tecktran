import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { HRSolutions } from "./pages/services/HRSolutions";
import { PayrollManagement } from "./pages/services/PayrollManagement";
import { LogisticsSupport } from "./pages/services/LogisticsSupport";
import { GeneralSupply } from "./pages/services/GeneralSupply";
import OffshoreCrewManagement from "./pages/services/OffshoreCrewManagement";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/hr-solutions" element={<HRSolutions />} />
            <Route
              path="/services/payroll-management"
              element={<PayrollManagement />}
            />
            <Route
              path="/services/logistics-support"
              element={<LogisticsSupport />}
            />
            <Route
              path="/services/general-supply"
              element={<GeneralSupply />}
            />
            <Route
              path="/services/offshore-crew-management"
              element={<OffshoreCrewManagement />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
