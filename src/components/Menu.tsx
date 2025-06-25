import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineHome, AiOutlineQrcode, AiOutlineUser, AiOutlineShop } from "react-icons/ai";

const Menu = () => {
  const location = useLocation();

  const getLinkStyle = (path: string) => ({
    color: location.pathname === path ? "#007bff" : "#555",
    fontSize: location.pathname === path ? "28px" : "24px",
    transform: location.pathname === path ? "scale(1.2)" : "scale(1)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  });

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#fff",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        padding: "12px 8px 40px 8px",
        zIndex: 1000,
      }}
    >
      <div style={getLinkStyle("/")}>
        <Link to="/" style={{ color: "inherit" }}>
          <AiOutlineHome />
        </Link>
      </div>

      <div style={getLinkStyle("/qrcode")}>
        <Link to="/qrcode" style={{ color: "inherit" }}>
          <AiOutlineQrcode />
        </Link>
      </div>

      <div style={getLinkStyle("/exchange")}>
        <Link to="/exchange" style={{ color: "inherit" }}>
          <AiOutlineShop />
        </Link>
      </div>

      <div style={getLinkStyle("/profile")}>
        <Link to="/profile" style={{ color: "inherit" }}>
          <AiOutlineUser />
        </Link>
      </div>
    </motion.nav>
  );
};

export default Menu;
