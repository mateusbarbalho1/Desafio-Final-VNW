import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componenents/Header/Header";
import Home from "./Componenents/Home/Home";
import Novidades from "./Componenents/Novidades/Novidades";
import Sobre from "./Componenents/Sobre/Sobre";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
