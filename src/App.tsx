import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BackdoorLanding } from "@/polymet/pages/backdoor-landing";
import { TermsPage } from "@/polymet/pages/terms";

export default function BackdoorApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BackdoorLanding />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}
