import { Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Tender from "./pages/Tender";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orcamento" element={<Tender />} />
    </Routes>
  );
}
