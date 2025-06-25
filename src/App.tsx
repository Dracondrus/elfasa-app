import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import QrCode from "./components/QrCode";
import Menu from "./components/Menu";
import Exchange from "./components/Exchange";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ paddingBottom: "60px" }}> {/* чтобы контент не перекрывался навигацией */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode" element={<QrCode />} />
          <Route path="/profile" element={<Profile />} />
              <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </div>

      {/* Нижнее меню */}
    
      <Menu/>
    </BrowserRouter>
  );
}
