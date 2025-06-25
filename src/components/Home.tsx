import { motion } from "framer-motion";
import {
  AiOutlineCamera,
  AiOutlineGift,
  AiOutlineQrcode,
  AiOutlineTrophy,
  AiOutlineStar, // Changed from AiOutlineSmile for "Подробнее"
  AiOutlineCheckCircle,
  AiOutlineCalendar, // New icon for daily tasks
} from "react-icons/ai";

const Home = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} // Slightly longer transition for smoother feel
      style={{
        padding: "25px", // Increased padding
        textAlign: "center",
        maxWidth: "550px", // Increased max-width for more breathing room
        margin: "20px auto", // Add vertical margin
        background: "#f8fcf8", // Very light green/off-white background
        borderRadius: "20px", // More rounded corners
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)", // Softer, more prominent shadow
      }}
    >
      {/* Dynamic and Engaging Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          color: "#2e7d32", // Deep, inviting green
          marginBottom: "16px",
          fontSize: "2.5em", // Larger, more impactful
          fontWeight: "800", // Extra bold
          textShadow: "2px 2px 5px rgba(0,0,0,0.1)", // Subtle shadow for depth
        }}
      >
        Добро пожаловать в <span style={{ color: "#1976d2" }}>PlantApp! 🌿</span>
      </motion.h1>

      <p
        style={{
          color: "#555", // Slightly darker for readability
          marginBottom: "30px", // More space
          fontSize: "1.1em", // Slightly larger font
          lineHeight: "1.6",
        }}
      >
        Вас ждут увлекательные задания, ценные призы и мир удивительных растений. Давайте начнем приключение!
      </p>

      {/* --- */}
      {/* Main Task Blocks */}
      {/* --- */}
      <h3 style={{ color: "#388e3c", marginBottom: "18px", fontSize: "1.5em" }}>
        Чем займемся сегодня?
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px", // Increased gap
          marginBottom: "30px",
        }}
      >
        {/* Сфотографируй растение */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,121,107,0.3)" }} // Enhanced hover effect
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #c8e6c9, #66bb6a)", // Fresher green gradient
            borderRadius: "15px", // More rounded
            padding: "20px", // More padding
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => alert("Откроется камера для съемки растения. Распознавание бонусов!")}
        >
          <AiOutlineCamera size={50} color="#1b5e20" /> {/* Larger, deeper green icon */}
          <p
            style={{
              marginTop: "12px",
              fontWeight: "700", // Bolder
              color: "#1b5e20", // Matching deep green
              fontSize: "1.1em",
            }}
          >
            Сфотографируй растение
          </p>
          <small style={{ color: "#4caf50", fontSize: "0.9em" }}>+50 баллов за открытие!</small>
        </motion.div>

        {/* Сканируй QR-код */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(245,124,0,0.3)" }} // Enhanced hover effect
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #ffe082, #ffb300)", // Brighter yellow/orange gradient
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => alert("Запустится сканер QR-кодов. Получите уникальные бонусы!")}
        >
          <AiOutlineQrcode size={50} color="#e65100" /> {/* Larger, deeper orange icon */}
          <p
            style={{
              marginTop: "12px",
              fontWeight: "700",
              color: "#e65100", // Matching deep orange
              fontSize: "1.1em",
            }}
          >
            Сканируй QR-код
          </p>
          <small style={{ color: "#ff8f00", fontSize: "0.9em" }}>Бонусы ждут!</small>
        </motion.div>
      </div>

      {/* --- */}
      {/* Daily Task Block (NEW) */}
      {/* --- */}
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,188,212,0.3)" }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: "linear-gradient(145deg, #e0f7fa, #4dd0e1)", // Refreshing blue gradient
          borderRadius: "15px",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          marginBottom: "20px", // Adjusted margin
          color: "#006064", // Dark teal for text
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
        onClick={() => alert("Выполняйте ежедневные задания для регулярных наград!")}
      >
        <AiOutlineCalendar size={45} color="#006064" />
        <div>
          <p style={{ fontWeight: "700", fontSize: "1.2em", marginBottom: "5px" }}>
            Ежедневное задание: Пройди 5000 шагов
          </p>
          <small style={{ fontSize: "0.9em" }}>Награда: +200 баллов! 🚶‍♂️</small>
        </div>
      </motion.div>

      {/* --- */}
      {/* Rewards and Leaderboard Blocks */}
      {/* --- */}
      <h3 style={{ color: "#388e3c", marginBottom: "18px", fontSize: "1.5em" }}>
        Ваши возможности и награды
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // Two columns for rewards
          gap: "20px",
          marginBottom: "30px", // Adjusted margin
        }}
      >
        {/* Получай подарки */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(126,87,194,0.3)" }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #d1c4e9, #9575cd)", // Softer purple gradient
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => alert("Чем больше активности, тем больше уникальных подарков!")}
        >
          <AiOutlineGift size={45} color="#fff" />
          <p style={{ marginTop: "10px", fontWeight: "700", fontSize: "1.1em" }}>
            Получай эксклюзивные подарки!
          </p>
        </motion.div>

        {/* Участвуй в розыгрышах */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255,87,34,0.3)" }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #ffccbc, #ff7043)", // Warmer orange gradient
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => alert("Принимай участие в еженедельных розыгрышах ценных призов!")}
        >
          <AiOutlineTrophy size={45} color="#fff" />
          <p style={{ marginTop: "10px", fontWeight: "700", fontSize: "1.1em" }}>
            Выигрывай ценные призы!
          </p>
        </motion.div>

        {/* Зарабатывай очки и будь в топе! */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,188,212,0.3)" }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: "linear-gradient(145deg, #b2ebf2, #4dd0e1)", // Bright teal gradient
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            color: "#fff",
            cursor: "pointer",
            gridColumn: "span 2", // Span both columns for a wider look
          }}
          onClick={() => alert("Соревнуйся с друзьями и займи первое место в рейтинге!")}
        >
          <AiOutlineCheckCircle size={45} color="#fff" />
          <p style={{ marginTop: "10px", fontWeight: "700", fontSize: "1.1em" }}>
            Будь в топе рейтинга!
          </p>
          <small style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9em" }}>
            Набирай очки и соревнуйся
          </small>
        </motion.div>
      </div>

      {/* --- */}
      {/* Call to Action Button */}
      {/* --- */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "linear-gradient(135deg, #4CAF50, #8BC34A)", // Vibrant green gradient
          color: "#fff",
          border: "none",
          padding: "15px 30px", // Larger padding
          borderRadius: "30px", // Pill-shaped button
          cursor: "pointer",
          fontSize: "1.2em", // Larger font
          fontWeight: "bold",
          boxShadow: "0 8px 20px rgba(76,175,80,0.4)", // Green-tinted shadow
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "auto", // Adjust width to content
          margin: "0 auto", // Center the button
          outline: "none", // Remove outline on focus
        }}
        onClick={() => alert("Приготовьтесь к новым функциям и сюрпризам!")}
      >
        <AiOutlineStar size={24} /> Узнать больше о возможностях!
      </motion.button>
    </motion.div>
  );
};

export default Home;