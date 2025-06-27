import { motion } from "framer-motion";
import {
  AiOutlineCamera,
  AiOutlineGift,
  AiOutlineQrcode,
  AiOutlineTrophy,
  AiOutlineStar,
  
  AiOutlineCalendar,
} from "react-icons/ai";

const Home = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "30px",
        textAlign: "center",
        maxWidth: "550px",
        margin: "30px auto",
        background: "linear-gradient(135deg, #f0fff4, #e8f5e9)",
        borderRadius: "25px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          color: "#2e7d32",
          marginBottom: "16px",
          fontSize: "2em",
          fontWeight: "800",
          textShadow: "2px 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        Добро пожаловать в <span style={{ color: "#1976d2" }}>PlantApp! 🌿</span>
      </motion.h1>

      <p
        style={{
          color: "#555",
          marginBottom: "30px",
          fontSize: "1.15em",
          lineHeight: "1.6",
        }}
      >
        Выполняйте задания, собирайте бонусы и откройте удивительный мир природы с нашей игрой!
      </p>

      <h3 style={{ color: "#388e3c", marginBottom: "18px", fontSize: "1.5em" }}>
        Ваши действия сегодня
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(76,175,80,0.3)" }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #c8e6c9, #66bb6a)",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
          onClick={() => alert("Откроется камера для съемки растения")}
        >
          <AiOutlineCamera size={50} color="#1b5e20" />
          <p style={{ marginTop: "12px", fontWeight: "700", color: "#1b5e20", fontSize: "1.1em" }}>
            Сканируйте растение
          </p>
          <small style={{ color: "#4caf50", fontSize: "0.9em" }}>+50 баллов</small>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255,152,0,0.3)" }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #ffe082, #ffb300)",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
          onClick={() => alert("Сканируйте QR-код для бонусов")}
        >
          <AiOutlineQrcode size={50} color="#e65100" />
          <p style={{ marginTop: "12px", fontWeight: "700", color: "#e65100", fontSize: "1.1em" }}>
            Сканируйте QR-код
          </p>
          <small style={{ color: "#ff8f00", fontSize: "0.9em" }}>Уникальные призы</small>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,188,212,0.3)" }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: "linear-gradient(145deg, #e0f7fa, #4dd0e1)",
          borderRadius: "15px",
          padding: "20px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          cursor: "pointer",
        }}
        onClick={() => alert("Пройдите 5000 шагов и получите бонус")}
      >
        <AiOutlineCalendar size={45} color="#006064" />
        <div>
          <p style={{ fontWeight: "700", fontSize: "1.2em", marginBottom: "5px", color: "#006064" }}>
            Ежедневное задание: 5000 шагов
          </p>
          <small style={{ color: "#00796b", fontSize: "0.9em" }}>+200 баллов</small>
        </div>
      </motion.div>

      <h3 style={{ color: "#388e3c", marginBottom: "18px", fontSize: "1.5em" }}>
        Бонусы и награды
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(126,87,194,0.3)" }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #d1c4e9, #9575cd)",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => alert("Активничайте и получайте подарки")}
        >
          <AiOutlineGift size={45} color="#fff" />
          <p style={{ marginTop: "10px", fontWeight: "700", fontSize: "1.1em" }}>
            Получайте подарки
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255,87,34,0.3)" }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #ffccbc, #ff7043)",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => alert("Участвуйте в розыгрышах")}
        >
          <AiOutlineTrophy size={45} color="#fff" />
          <p style={{ marginTop: "10px", fontWeight: "700", fontSize: "1.1em" }}>
            Выигрывайте призы
          </p>
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "linear-gradient(135deg, #4CAF50, #8BC34A)",
          color: "#fff",
          border: "none",
          padding: "15px 30px",
          borderRadius: "30px",
          cursor: "pointer",
          fontSize: "1.2em",
          fontWeight: "bold",
          boxShadow: "0 8px 20px rgba(76,175,80,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "auto",
          margin: "0 auto",
          outline: "none",
        }}
        onClick={() => alert("Узнайте больше о возможностях")}
      >
        <AiOutlineStar size={24} /> Подробнее о возможностях
      </motion.button>
    </motion.div>
  );
};

export default Home;
