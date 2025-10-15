import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BackdoorLanding } from "@/polymet/pages/backdoor-landing";

export default function BackdoorApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BackdoorLanding />} />
      </Routes>
    </Router>
  );
}
