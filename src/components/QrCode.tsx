import { motion } from "framer-motion";
import { AiOutlineCamera, AiOutlineQrcode, AiOutlineSun } from "react-icons/ai";

const QrCode = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        padding: "25px", // Slightly more padding
        maxWidth: "420px", // Slightly wider for better spacing
        margin: "20px auto", // Add top/bottom margin
        textAlign: "center",
        background: "#ffffff", // Pure white background
        borderRadius: "16px", // More rounded corners
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)", // Stronger, softer shadow
      }}
    >
      <h2
        style={{
          marginBottom: "20px", // More space below header
          fontSize: "2.2em", // Larger font size
          color: "#4a90e2", // A brighter, more modern blue
          textShadow: "2px 2px 4px rgba(0,0,0,0.15)", // Subtle text shadow
          fontWeight: "700", // Bolder font weight
        }}
      >
        Сканирование QR-кода
      </h2>

      <div
        style={{
          width: "240px", // Slightly larger QR frame
          height: "240px",
          border: "5px dashed #4a90e2", // Matching the new blue, slightly thicker
          borderRadius: "15px", // Slightly more rounded
          margin: "0 auto 25px auto", // More space below frame
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #e6f7ff, #cceeff)", // Light blue gradient
          boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1), 0 4px 15px rgba(0,0,0,0.15)", // Inner and outer shadow
        }}
      >
        <AiOutlineQrcode size={72} color="#4a90e2" /> {/* Larger icon */}
      </div>

      <p
        style={{
          color: "#333", // Darker for better contrast
          marginBottom: "35px", // More space below text
          fontSize: "1.15em", // Slightly larger font
          fontWeight: "500", // Medium font weight
          lineHeight: "1.5",
          textShadow: "0 1px 2px rgba(0,0,0,0.05)", // Very subtle text shadow
        }}
      >
        Наведите камеру на QR-код для получения <b style={{ color: "#28a745" }}>уникальных бонусов</b> и открытия новых возможностей 🌿
      </p>

      {/* New: Call to Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "linear-gradient(45deg, #28a745, #218838)", // Green gradient button
          color: "#fff",
          padding: "14px 30px",
          borderRadius: "30px",
          border: "none",
          fontSize: "1.2em",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 6px 15px rgba(40, 167, 69, 0.4)", // Green shadow
          marginBottom: "30px", // Space below the button
          outline: "none",
        }}
      >
        <AiOutlineCamera style={{ marginRight: '8px', verticalAlign: 'middle' }} />
        Начать сканирование
      </motion.button>
      {/* End New */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px", // Increased gap between boxes
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #e0f7fa, #81d4fa)",
            borderRadius: "15px", // More rounded corners
            padding: "20px", // More padding
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)", // Stronger shadow
            transition: "transform 0.3s ease-in-out", // Add transition for hover effect
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <AiOutlineSun size={40} color="#007bff" /> {/* Slightly larger icon */}
          <p
            style={{
              marginTop: "10px", // More space
              fontWeight: "bold",
              color: "#333",
              fontSize: "1.1em", // Slightly larger text
              textShadow: "0 1px 2px rgba(0,0,0,0.05)",
            }}
          >
            Шагов пройдено
          </p>
          <h3
            style={{
              color: "#007bff",
              fontSize: "1.8em", // Larger numbers
              textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            3 500
          </h3>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #ede7f6, #b39ddb)",
            borderRadius: "15px", // More rounded corners
            padding: "20px", // More padding
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)", // Stronger shadow
            transition: "transform 0.3s ease-in-out", // Add transition for hover effect
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <AiOutlineCamera size={40} color="#673ab7" /> {/* Slightly larger icon */}
          <p
            style={{
              marginTop: "10px", // More space
              fontWeight: "bold",
              color: "#333",
              fontSize: "1.1em", // Slightly larger text
              textShadow: "0 1px 2px rgba(0,0,0,0.05)",
            }}
          >
            Фото растений
          </p>
          <h3
            style={{
              color: "#673ab7",
              fontSize: "1.8em", // Larger numbers
              textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            12
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default QrCode;