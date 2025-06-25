import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineGift,
  AiOutlineQrcode,
  AiOutlineShop,
  AiOutlineCoffee,
  AiOutlineCheckCircle,
  AiOutlineStar,
  AiOutlineFire,
  AiOutlineRocket,
  AiOutlineCrown,
  
  AiOutlineHistory,
  AiOutlineArrowRight
} from "react-icons/ai";
import { FiAward, FiZap } from "react-icons/fi";

const Exchange = () => {
  const [points, setPoints] = useState(350);
  const [code, setCode] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const exchangeCategories = [
    { id: "all", name: "Все", icon: <AiOutlineStar /> },
    { id: "food", name: "Еда", icon: <AiOutlineCoffee /> },
    { id: "entertainment", name: "Развлечения", icon: <AiOutlineRocket /> },
    { id: "shopping", name: "Шопинг", icon: <AiOutlineShop /> },
    { id: "premium", name: "Премиум", icon: <AiOutlineCrown /> },
  ];

  const exchangeItems = [
    {
      id: 1,
      name: "Кофе Evos",
      description: "Бесплатный кофе в любом филиале",
      price: 50,
      icon: <AiOutlineCoffee size={36} color="#4caf50" />,
      category: "food",
      popular: true,
      shape: "rounded",
      bgColor: "#e8f5e9"
    },
    {
      id: 2,
      name: "Билет в кино",
      description: "На любой сеанс в кинотеатрах города",
      price: 150,
      icon: <AiOutlineQrcode size={36} color="#673ab7" />,
      category: "entertainment",
      popular: true,
      shape: "oval",
      bgColor: "#f3e5f5"
    },
    {
      id: 3,
      name: "Скидка 20% в Магазин",
      description: "На покупки от 100 000 сум",
      price: 70,
      icon: <AiOutlineShop size={36} color="#ff9800" />,
      category: "shopping",
      shape: "rounded",
      bgColor: "#fff3e0"
    },
    {
      id: 4,
      name: "Подарочный набор",
      description: "Эксклюзивный набор от партнеров",
      price: 250,
      icon: <AiOutlineGift size={36} color="#007bff" />,
      category: "premium",
      shape: "circle",
      bgColor: "#e3f2fd"
    },
    {
      id: 5,
      name: "Бургер Combo",
      description: "Чизбургер + картофель + напиток",
      price: 80,
      icon: <AiOutlineCoffee size={36} color="#e91e63" />,
      category: "food",
      shape: "rounded",
      bgColor: "#fce4ec"
    },
    {
      id: 6,
      name: "VIP статус",
      description: "Эксклюзивные бонусы на месяц",
      price: 300,
      icon: <AiOutlineCrown size={36} color="#ffc107" />,
      category: "premium",
      popular: true,
      shape: "circle",
      bgColor: "#fff8e1"
    },
  ];

  const filteredItems = activeTab === "all" 
    ? exchangeItems 
    : exchangeItems.filter(item => item.category === activeTab);

  const getShapeStyle = (shape: string) => {
    switch (shape) {
      case "circle":
        return { borderRadius: "50%" };
      case "oval":
        return { borderRadius: "50% / 25%" };
      default:
        return { borderRadius: "16px" };
    }
  };

  const handleExchange = (item: any) => {
    if (points < item.price) {
      setMessage(`Недостаточно очков! Нужно еще ${item.price - points}`);
      setCode(null);
      return;
    }
    
    setPoints(points - item.price);
    const generatedCode = `CODE-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setCode(`Ваш код для "${item.name}": ${generatedCode}`);
    setMessage(null);
    
    // Добавляем в историю
    const newHistoryItem = {
      ...item,
      code: generatedCode,
      date: new Date().toLocaleString()
    };
    setHistory([newHistoryItem, ...history]);
    
    // Эффект конфетти для дорогих товаров
    if (item.price > 200) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const redeemPoints = () => {
    setPoints(prev => prev + 50);
    setMessage("+50 бонусных очков за активность!");
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "center",
        background: "linear-gradient(180deg, #f5f7fa 0%, #e4e8eb 100%)",
        minHeight: "100vh"
      }}
    >
      {/* Confetti эффект */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#ff5722"
            }}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1.5 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center" }}
            >
              🎉 Поздравляем с ценной покупкой! 🎉
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Шапка с балансом */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        style={{
          background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
          borderRadius: "16px",
          padding: "16px",
          marginBottom: "24px",
          boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
          color: "white",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: "150px",
          height: "150px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%"
        }}></div>
        <h2 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>Бонусный баланс</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <AiOutlineStar size={28} color="#ffeb3b" />
          <span style={{ fontSize: "32px", fontWeight: "bold" }}>{points}</span>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={redeemPoints}
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            borderRadius: "20px",
            padding: "6px 12px",
            color: "white",
            fontSize: "12px",
            marginTop: "8px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer"
          }}
        >
          <FiZap size={14} /> Получить бонус
        </motion.button>
      </motion.div>

      {/* Категории */}
      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: "8px",
        padding: "8px 0",
        marginBottom: "16px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}>
        {exchangeCategories.map(category => (
          <motion.button
            key={category.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(category.id)}
            style={{
              background: activeTab === category.id ? "#3a7bd5" : "white",
              color: activeTab === category.id ? "white" : "#333",
              border: "none",
              borderRadius: "20px",
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            {category.icon}
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* История обменов */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "16px"
      }}>
        <h3 style={{ margin: 0, color: "#333" }}>Доступные награды</h3>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowHistory(!showHistory)}
          style={{
            background: "none",
            border: "none",
            color: "#3a7bd5",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "14px",
            cursor: "pointer"
          }}
        >
          <AiOutlineHistory /> История
        </motion.button>
      </div>

      {/* Список товаров или история */}
      {showHistory ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            marginBottom: "16px"
          }}
        >
          {history.length === 0 ? (
            <p style={{ color: "#777" }}>У вас пока нет истории обменов</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {history.map((item, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  background: "#f9f9f9",
                  borderRadius: "12px"
                }}>
                  <div style={{
                    background: item.bgColor,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1, textAlign: "left" }}>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{item.name}</p>
                    <p style={{ margin: 0, fontSize: "12px", color: "#777" }}>{item.date}</p>
                  </div>
                  <div style={{
                    background: "#e8f5e9",
                    padding: "4px 8px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    color: "#2e7d32"
                  }}>
                    {item.code}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{
                ...getShapeStyle(item.shape),
                background: item.bgColor,
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "180px",
                position: "relative",
                overflow: "hidden"
              }}
              onClick={() => handleExchange(item)}
            >
              {item.popular && (
                <div style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "#ff5722",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}>
                  <AiOutlineFire size={12} /> Популярное
                </div>
              )}
              
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                {item.icon}
                <p style={{ margin: "8px 0 0 0", fontWeight: "bold", fontSize: "14px" }}>{item.name}</p>
                <p style={{ margin: "4px 0", color: "#555", fontSize: "12px" }}>{item.description}</p>
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                marginTop: "8px",
                background: "rgba(255,255,255,0.7)",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold"
              }}>
                <AiOutlineStar color="#ffc107" /> {item.price}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Сообщения */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{
              background: message.includes("Недостаточно") ? "#ffebee" : "#e8f5e9",
              color: message.includes("Недостаточно") ? "#c62828" : "#2e7d32",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            {message.includes("Недостаточно") ? (
              <AiOutlineFire color="#c62828" />
            ) : (
              <AiOutlineCheckCircle color="#2e7d32" />
            )}
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Полученный код */}
      {code && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
            padding: "16px",
            borderRadius: "16px",
            marginTop: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            gap: "8px",
            marginBottom: "8px"
          }}>
            <AiOutlineCheckCircle size={24} color="#1976d2" />
            <h3 style={{ margin: 0, color: "#0d47a1" }}>Обмен выполнен!</h3>
          </div>
          <p style={{ margin: "8px 0", color: "#333" }}>{code.split(":")[0]}</p>
          <div style={{
            background: "white",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1976d2",
            letterSpacing: "2px",
            margin: "12px 0",
            textAlign: "center"
          }}>
            {code.split(":")[1].trim()}
          </div>
          <p style={{ 
            margin: "8px 0 0 0", 
            fontSize: "12px", 
            color: "#555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px"
          }}>
            <AiOutlineArrowRight /> Покажите этот код на кассе
          </p>
        </motion.div>
      )}

      {/* Подсказка */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "12px",
          marginTop: "24px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <div style={{
          background: "#e3f2fd",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <FiAward size={20} color="#1976d2" />
        </div>
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "0 0 4px 0", fontWeight: "bold", fontSize: "14px" }}>Как получить больше очков?</p>
          <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>
            Делайте покупки, приглашайте друзей и выполняйте задания!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Exchange;