import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Negotiation from "../pages/negotiation";
import Result from "../pages/result";
import Header from "../components/header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/negotiate" element={<Negotiation />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
