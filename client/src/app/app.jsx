import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Negotiation from "./pages/Negotiation";
import Result from "./pages/Result";
import Header from "./components/Header";

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
