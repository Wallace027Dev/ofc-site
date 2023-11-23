import { BrowserRouter } from "react-router-dom";

import AppRoutes from "../Routes";

import "../assets/styles/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
