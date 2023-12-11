import { Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Tender from "./pages/Tender";
import ContactUs from "./pages/ContactUs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orcamento" element={<Tender />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}
