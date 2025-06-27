import { motion } from "framer-motion";
import { AiOutlineCamera, AiOutlineQrcode, AiOutlineSun } from "react-icons/ai";

const QrCode = () => {
  const handleScan = () => {
    if (window.Android && window.Android.startQrScanner) {
      window.Android.startQrScanner();
    } else {
      alert("В реальном приложении здесь откроется сканер QR-кодов 📲");
    }
  };

  const handleCamera = () => {
    if (window.Android && window.Android.openCamera) {
      window.Android.openCamera();
    } else {
      alert("В реальном приложении здесь откроется камера для фотографирования растений 🌿");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        padding: "25px",
        maxWidth: "420px",
        margin: "20px auto",
        textAlign: "center",
        background: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "2.3em",
          color: "#4a90e2",
          textShadow: "2px 2px 5px rgba(0,0,0,0.15)",
          fontWeight: "800",
        }}
      >
        Сканирование QR-кода
      </h2>

      <div
        onClick={handleScan}
        style={{
          width: "240px",
          height: "240px",
          border: "5px dashed #4a90e2",
          borderRadius: "15px",
          margin: "0 auto 25px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #e6f7ff, #cceeff)",
          boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1), 0 4px 15px rgba(0,0,0,0.15)",
          cursor: "pointer",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <AiOutlineQrcode size={80} color="#4a90e2" />
      </div>

      <p
        style={{
          color: "#333",
          marginBottom: "35px",
          fontSize: "1.15em",
          fontWeight: "500",
          lineHeight: "1.5",
        }}
      >
        Наведите камеру на QR-код для получения <b style={{ color: "#28a745" }}>уникальных бонусов</b> и открытия новых возможностей 🌿
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "linear-gradient(45deg, #28a745, #218838)",
          color: "#fff",
          padding: "14px 30px",
          borderRadius: "30px",
          border: "none",
          fontSize: "1.2em",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 6px 15px rgba(40, 167, 69, 0.4)",
          marginBottom: "30px",
          outline: "none",
        }}
        onClick={handleCamera}
      >
        <AiOutlineCamera style={{ marginRight: '8px', verticalAlign: 'middle' }} />
        Сфотографировать растение
      </motion.button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: "linear-gradient(135deg, #e0f7fa, #81d4fa)",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            cursor: "default",
          }}
        >
          <AiOutlineSun size={40} color="#007bff" />
          <p
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              color: "#333",
              fontSize: "1.1em",
            }}
          >
            Шагов пройдено
          </p>
          <h3
            style={{
              color: "#007bff",
              fontSize: "1.8em",
            }}
          >
            3 500
          </h3>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: "linear-gradient(135deg, #ede7f6, #b39ddb)",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            cursor: "default",
          }}
        >
          <AiOutlineCamera size={40} color="#673ab7" />
          <p
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              color: "#333",
              fontSize: "1.1em",
            }}
          >
            Фото растений
          </p>
          <h3
            style={{
              color: "#673ab7",
              fontSize: "1.8em",
            }}
          >
            12
          </h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QrCode;
