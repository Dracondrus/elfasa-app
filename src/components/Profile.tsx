import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AiOutlineGift, 
  AiOutlineStar, 
  AiOutlineCamera, 
  AiOutlineEdit, 
  AiOutlineQrcode, 
  AiOutlineSun,
  AiOutlineSetting,
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineBell,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
  AiOutlineHeart,
  AiOutlineTrophy,
  AiOutlineMessage,
  AiOutlinePlus,

  AiOutlineShareAlt,
  AiOutlineDownload
} from "react-icons/ai";
import { FiAward } from "react-icons/fi";

const Profile = () => {
  const [user, setUser] = useState({
    firstName: "ELFASA",
    lastName: "TASA",
    phone: "+998 90 000 00 00",
    points: 125,
    gifts: 3,
    photoCount: 24,
    qrScans: 15,
    steps: 3200,
    level: 5,
    achievements: 8,
    friends: 42,
    theme: "light",
    notifications: true,
    bio: "Люблю растения и природу 🌱",
    lastActive: "5 минут назад"
  });

  const [showSettings, setShowSettings] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showEditBio, setShowEditBio] = useState(false);
  const [newBio, setNewBio] = useState(user.bio);
  const [activeTab, setActiveTab] = useState("stats");
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Анимация для шагов
  const [animatedSteps, setAnimatedSteps] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (animatedSteps < user.steps) {
        setAnimatedSteps(prev => Math.min(prev + 50, user.steps));
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [animatedSteps, user.steps]);

  const toggleTheme = () => {
    setUser(prev => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light"
    }));
  };

  const toggleNotifications = () => {
    setUser(prev => ({
      ...prev,
      notifications: !prev.notifications
    }));
  };

  const handleSaveBio = () => {
    setUser(prev => ({ ...prev, bio: newBio }));
    setShowEditBio(false);
  };

  const shareProfile = (method:any) => {
    // Здесь будет логика для разных методов шаринга
    alert(`Профиль будет отправлен через ${method}`);
    setShowShareOptions(false);
  };

  const generateQRCode = () => {
    // Здесь будет генерация QR кода
    return (
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center"
      }}>
        <div style={{
          width: "200px",
          height: "200px",
          background: "#eee",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#333",
          fontWeight: "bold",
          marginBottom: "20px"
        }}>
          QR Code Placeholder
        </div>
        <p style={{ marginBottom: "20px" }}>Отсканируйте этот код для быстрого доступа к профилю</p>
        <button style={{
          background: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: "0 auto"
        }}>
          <AiOutlineDownload /> Сохранить QR
        </button>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        background: user.theme === "light" ? "#fff" : "#1a1a1a",
        minHeight: "100vh",
        color: user.theme === "light" ? "#333" : "#fff",
      }}
    >
      {/* Шапка профиля */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <motion.div 
          whileTap={{ scale: 0.9 }}
          style={{ 
            background: user.theme === "light" ? "#f5f5f5" : "#333",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
          onClick={() => setShowAchievement(true)}
        >
          <AiOutlineTrophy color={user.theme === "light" ? "#ff9800" : "#ffc107"} />
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSettings(true)}
          style={{
            marginTop:30,
            background: "linear-gradient(135deg, #007bff, #00bcd4)",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <AiOutlineSetting /> Настройки
        </motion.button>
      </div>

      {/* Аватар и основная информация */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00bcd4, #007bff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px auto",
          color: "#fff",
          fontSize: "48px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        {user.firstName.charAt(0)}
        <div style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          background: "#ff9800",
          color: "#fff",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}>
          {user.level}
        </div>
      </motion.div>

      <h2 style={{ marginBottom: "4px", fontWeight: "600" }}>
        {user.firstName} {user.lastName}
      </h2>
      
      <p style={{ 
        color: user.theme === "light" ? "#555" : "#aaa", 
        marginBottom: "8px",
        fontSize: "14px"
      }}>
        {user.phone}
      </p>
      
      <p style={{ 
        color: user.theme === "light" ? "#777" : "#999", 
        fontSize: "12px",
        marginBottom: "16px"
      }}>
        {user.lastActive}
      </p>

      {/* Биография */}
      <div style={{
        background: user.theme === "light" ? "#f9f9f9" : "#222",
        borderRadius: "12px",
        padding: "12px",
        marginBottom: "16px",
        position: "relative"
      }}>
        {showEditBio ? (
          <div>
            <textarea
              value={newBio}
              onChange={(e) => setNewBio(e.target.value)}
              style={{
                width: "100%",
                minHeight: "60px",
                background: "transparent",
                border: `1px solid ${user.theme === "light" ? "#ddd" : "#444"}`,
                borderRadius: "8px",
                padding: "8px",
                color: user.theme === "light" ? "#333" : "#fff",
                marginBottom: "8px"
              }}
            />
            <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
              <button 
                onClick={() => setShowEditBio(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#e91e63",
                  cursor: "pointer",
                  padding: "4px 8px"
                }}
              >
                Отмена
              </button>
              <button 
                onClick={handleSaveBio}
                style={{
                  background: "#4caf50",
                  border: "none",
                  color: "#fff",
                  borderRadius: "4px",
                  cursor: "pointer",
                  padding: "4px 8px"
                }}
              >
                Сохранить
              </button>
            </div>
          </div>
        ) : (
          <>
            <p style={{ margin: 0, textAlign: "center" }}>{user.bio}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowEditBio(true)}
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: user.theme === "light" ? "#777" : "#aaa"
              }}
            >
              <AiOutlineEdit size={14} />
            </motion.button>
          </>
        )}
      </div>

      {/* Табы */}
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "16px",
        borderBottom: `1px solid ${user.theme === "light" ? "#eee" : "#333"}`,
        paddingBottom: "8px"
      }}>
        <button
          onClick={() => setActiveTab("stats")}
          style={{
            background: "none",
            border: "none",
            color: activeTab === "stats" ? "#007bff" : (user.theme === "light" ? "#777" : "#aaa"),
            cursor: "pointer",
            fontWeight: activeTab === "stats" ? "600" : "400",
            padding: "4px 8px",
            borderBottom: activeTab === "stats" ? "2px solid #007bff" : "none"
          }}
        >
          Статистика
        </button>
        <button
          onClick={() => setActiveTab("activity")}
          style={{
            background: "none",
            border: "none",
            color: activeTab === "activity" ? "#007bff" : (user.theme === "light" ? "#777" : "#aaa"),
            cursor: "pointer",
            fontWeight: activeTab === "activity" ? "600" : "400",
            padding: "4px 8px",
            borderBottom: activeTab === "activity" ? "2px solid #007bff" : "none"
          }}
        >
          Активность
        </button>
        <button
          onClick={() => setActiveTab("friends")}
          style={{
            background: "none",
            border: "none",
            color: activeTab === "friends" ? "#007bff" : (user.theme === "light" ? "#777" : "#aaa"),
            cursor: "pointer",
            fontWeight: activeTab === "friends" ? "600" : "400",
            padding: "4px 8px",
            borderBottom: activeTab === "friends" ? "2px solid #007bff" : "none"
          }}
        >
          Друзья
        </button>
      </div>

      {/* Контент табов */}
      {activeTab === "stats" && (
        <>
          {/* Прогресс бар */}
          <div style={{
            width: "100%",
            background: user.theme === "light" ? "#eee" : "#333",
            borderRadius: "10px",
            height: "10px",
            marginBottom: "16px",
            overflow: "hidden",
            position: "relative"
          }}>
            <div style={{
              width: `${Math.min(100, (user.points / 200) * 100)}%`,
              height: "100%",
              background: "linear-gradient(90deg, #00bcd4, #007bff)",
              borderRadius: "10px",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                right: "-8px",
                top: "-5px",
                width: "20px",
                height: "20px",
                background: "#007bff",
                borderRadius: "50%",
                border: `2px solid ${user.theme === "light" ? "#fff" : "#1a1a1a"}`,
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}></div>
            </div>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "16px",
            fontSize: "12px",
            color: user.theme === "light" ? "#777" : "#aaa"
          }}>
            <span>{user.points} очков</span>
            <span>До след. уровня: {200 - user.points}</span>
          </div>

          {/* Статистика профиля */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "12px",
              marginBottom: "24px"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{
                background: user.theme === "light" ? "#e8f5e9" : "#1b5e20",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 8px auto"
              }}>
                <AiOutlineHeart size={24} color="#4caf50" />
              </div>
              <p style={{ 
                fontSize: "12px", 
                color: user.theme === "light" ? "#777" : "#aaa",
                marginBottom: "4px"
              }}>Друзья</p>
              <p style={{ fontWeight: "600" }}>{user.friends}</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                background: user.theme === "light" ? "#e3f2fd" : "#0d47a1",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 8px auto"
              }}>
                <FiAward size={24} color="#2196f3" />
              </div>
              <p style={{ 
                fontSize: "12px", 
                color: user.theme === "light" ? "#777" : "#aaa",
                marginBottom: "4px"
              }}>Достижения</p>
              <p style={{ fontWeight: "600" }}>{user.achievements}</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                background: user.theme === "light" ? "#f3e5f5" : "#4a148c",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 8px auto"
              }}>
                <AiOutlineMessage size={24} color="#9c27b0" />
              </div>
              <p style={{ 
                fontSize: "12px", 
                color: user.theme === "light" ? "#777" : "#aaa",
                marginBottom: "4px"
              }}>Сообщения</p>
              <p style={{ fontWeight: "600" }}>12</p>
            </div>
          </div>

          {/* Основные карточки */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "24px"
            }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: user.theme === "light" ? "linear-gradient(135deg, #e1f5fe, #81d4fa)" : "linear-gradient(135deg, #01579b, #0288d1)",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                position: "relative"
              }}
            >
              <AiOutlineStar size={36} color="#007bff" />
              <p style={{ marginTop: "8px", fontWeight: "bold" }}>Очки</p>
              <h3 style={{ color: "#007bff" }}>{user.points}</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setUser(prev => ({ ...prev, points: prev.points + 10 }))}
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  background: "rgba(255,255,255,0.3)",
                  border: "none",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <AiOutlinePlus size={14} color="#007bff" />
              </motion.button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: user.theme === "light" ? "linear-gradient(135deg, #fff8e1, #ffe082)" : "linear-gradient(135deg, #e65100, #ff9800)",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <AiOutlineGift size={36} color="#ff9800" />
              <p style={{ marginTop: "8px", fontWeight: "bold" }}>Подарки</p>
              <h3 style={{ color: "#ff9800" }}>{user.gifts}</h3>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: user.theme === "light" ? "linear-gradient(135deg, #ede7f6, #b39ddb)" : "linear-gradient(135deg, #4a148c, #7b1fa2)",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                gridColumn: "1 / 3",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div style={{ textAlign: "left" }}>
                <AiOutlineCamera size={36} color="#673ab7" />
                <p style={{ marginTop: "8px", fontWeight: "bold" }}>Фото растений</p>
                <h3 style={{ color: "#673ab7" }}>{user.photoCount}</h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <AiOutlinePlus size={14} /> Добавить
              </motion.button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: user.theme === "light" ? "linear-gradient(135deg, #e8f5e9, #a5d6a7)" : "linear-gradient(135deg, #1b5e20, #388e3c)",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <AiOutlineQrcode size={36} color="#4caf50" />
              <p style={{ marginTop: "8px", fontWeight: "bold" }}>Сканов QR</p>
              <h3 style={{ color: "#4caf50" }}>{user.qrScans}</h3>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: user.theme === "light" ? "linear-gradient(135deg, #fce4ec, #f48fb1)" : "linear-gradient(135deg, #880e4f, #c2185b)",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <AiOutlineSun size={36} color="#e91e63" />
              <p style={{ marginTop: "8px", fontWeight: "bold" }}>Шагов</p>
              <h3 style={{ color: "#e91e63" }}>{animatedSteps.toLocaleString()}</h3>
            </motion.div>
          </div>
        </>
      )}

      {activeTab === "activity" && (
        <div style={{
          background: user.theme === "light" ? "#f9f9f9" : "#222",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "16px"
        }}>
          <h4 style={{ marginTop: 0, marginBottom: "16px", textAlign: "left" }}>Последняя активность</h4>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "12px",
              paddingBottom: "12px",
              borderBottom: `1px solid ${user.theme === "light" ? "#eee" : "#333"}`,
              textAlign: "left"
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                background: user.theme === "light" ? "#eee" : "#333",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {item === 1 && <AiOutlineCamera color="#673ab7" />}
                {item === 2 && <AiOutlineQrcode color="#4caf50" />}
                {item === 3 && <AiOutlineStar color="#ff9800" />}
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: "500" }}>
                  {item === 1 && "Добавлено новое фото растения"}
                  {item === 2 && "Отсканирован QR код"}
                  {item === 3 && "Получено 10 очков"}
                </p>
                <p style={{ 
                  margin: 0, 
                  fontSize: "12px", 
                  color: user.theme === "light" ? "#777" : "#aaa"
                }}>
                  {item} {item === 1 ? "день" : item === 2 ? "дня" : "дней"} назад
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "friends" && (
        <div style={{
          background: user.theme === "light" ? "#f9f9f9" : "#222",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "16px"
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            marginBottom: "16px"
          }}>
            <h4 style={{ margin: 0 }}>Друзья ({user.friends})</h4>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "6px 12px",
                fontSize: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}
            >
              <AiOutlinePlus size={12} /> Добавить
            </motion.button>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "12px"
          }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -3 }}
                style={{
                  background: user.theme === "light" ? "#fff" : "#333",
                  borderRadius: "8px",
                  padding: "8px",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              >
                <div style={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(135deg, #00bcd4, #007bff)",
                  borderRadius: "50%",
                  margin: "0 auto 8px auto",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px"
                }}>
                  {String.fromCharCode(65 + item)}
                </div>
                <p style={{ 
                  margin: 0, 
                  fontSize: "12px", 
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  Друг {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Кнопка поделиться профилем */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowShareOptions(true)}
        style={{
          background: user.theme === "light" ? "#f5f5f5" : "#333",
          border: "none",
          borderRadius: "8px",
          padding: "12px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: "pointer",
          marginBottom: "16px"
        }}
      >
        <AiOutlineShareAlt /> Поделиться профилем
      </motion.button>

      {/* Кнопка показать QR */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowQR(true)}
        style={{
          background: "linear-gradient(135deg, #007bff, #00bcd4)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "12px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <AiOutlineQrcode size={20} /> Показать QR код
      </motion.button>

      {/* Модальное окно настроек */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
            }}
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              style={{
                background: user.theme === "light" ? "#fff" : "#2d2d2d",
                borderRadius: "16px",
                padding: "20px",
                width: "100%",
                maxWidth: "400px",
                maxHeight: "80vh",
                overflowY: "auto",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginBottom: "20px",
                borderBottom: `1px solid ${user.theme === "light" ? "#eee" : "#444"}`,
                paddingBottom: "16px"
              }}>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>Настройки профиля</h3>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowSettings(false)}
                  style={{ 
                    background: "none", 
                    border: "none", 
                    cursor: "pointer", 
                    fontSize: "20px",
                    color: user.theme === "light" ? "#333" : "#fff"
                  }}
                >
                  <AiOutlineClose />
                </motion.button>
              </div>

              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "8px",
                marginBottom: "20px"
              }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: `1px solid ${user.theme === "light" ? "#f5f5f5" : "#444"}`
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      background: "#007bff",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <AiOutlineUser size={20} color="#fff" />
                    </div>
                    <span>Редактировать профиль</span>
                  </div>
                  <AiOutlineEdit color={user.theme === "light" ? "#777" : "#aaa"} />
                </div>

                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: `1px solid ${user.theme === "light" ? "#f5f5f5" : "#444"}`
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      background: "#ff9800",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <AiOutlineLock size={20} color="#fff" />
                    </div>
                    <span>Безопасность</span>
                  </div>
                  <AiOutlineEdit color={user.theme === "light" ? "#777" : "#aaa"} />
                </div>

                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: `1px solid ${user.theme === "light" ? "#f5f5f5" : "#444"}`
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      background: "#673ab7",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <AiOutlineBell size={20} color="#fff" />
                    </div>
                    <span>Уведомления</span>
                  </div>
                  <label style={{ position: "relative", display: "inline-block", width: "50px", height: "24px" }}>
                    <input 
                      type="checkbox" 
                      checked={user.notifications}
                      onChange={toggleNotifications}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                      position: "absolute",
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: user.notifications ? "#673ab7" : "#ccc",
                      transition: ".4s",
                      borderRadius: "24px"
                    }}></span>
                    <span style={{
                      position: "absolute",
                      content: "",
                      height: "16px",
                      width: "16px",
                      left: user.notifications ? "30px" : "4px",
                      bottom: "4px",
                      backgroundColor: "white",
                      transition: ".4s",
                      borderRadius: "50%"
                    }}></span>
                  </label>
                </div>

                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: `1px solid ${user.theme === "light" ? "#f5f5f5" : "#444"}`
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      background: "#4caf50",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <AiOutlineQuestionCircle size={20} color="#fff" />
                    </div>
                    <span>Помощь</span>
                  </div>
                  <AiOutlineEdit color={user.theme === "light" ? "#777" : "#aaa"} />
                </div>

                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: `1px solid ${user.theme === "light" ? "#f5f5f5" : "#444"}`
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      background: user.theme === "light" ? "#333" : "#555",
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <AiOutlineSun size={20} color="#fff" />
                    </div>
                    <span>Тема: {user.theme === "light" ? "Светлая" : "Темная"}</span>
                  </div>
                  <label style={{ position: "relative", display: "inline-block", width: "50px", height: "24px" }}>
                    <input 
                      type="checkbox" 
                      checked={user.theme === "dark"}
                      onChange={toggleTheme}
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />
                    <span style={{
                      position: "absolute",
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: user.theme === "dark" ? "#333" : "#ccc",
                      transition: ".4s",
                      borderRadius: "24px"
                    }}></span>
                    <span style={{
                      position: "absolute",
                      content: "",
                      height: "16px",
                      width: "16px",
                      left: user.theme === "dark" ? "30px" : "4px",
                      bottom: "4px",
                      backgroundColor: "white",
                      transition: ".4s",
                      borderRadius: "50%"
                    }}></span>
                  </label>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "12px",
                  background: "none",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color: "#e91e63",
                  fontWeight: "600",
                  marginTop: "16px",
                  borderTop: `1px solid ${user.theme === "light" ? "#f5f5f5" : "#444"}`,
                  paddingTop: "16px"
                }}
              >
                <AiOutlineLogout size={20} />
                <span>Выйти из аккаунта</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Модальное окно достижений */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
            }}
            onClick={() => setShowAchievement(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              style={{
                background: user.theme === "light" ? "#fff" : "#2d2d2d",
                borderRadius: "16px",
                padding: "20px",
                width: "100%",
                maxWidth: "400px",
                maxHeight: "80vh",
                overflowY: "auto",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginBottom: "20px",
                borderBottom: `1px solid ${user.theme === "light" ? "#eee" : "#444"}`,
                paddingBottom: "16px"
              }}>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>Мои достижения</h3>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowAchievement(false)}
                  style={{ 
                    background: "none", 
                    border: "none", 
                    cursor: "pointer", 
                    fontSize: "20px",
                    color: user.theme === "light" ? "#333" : "#fff"
                  }}
                >
                  <AiOutlineClose />
                </motion.button>
              </div>

              <div style={{ 
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
                textAlign: "center"
              }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: user.theme === "light" ? "#f5f5f5" : "#333",
                      borderRadius: "12px",
                      padding: "12px",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{
                      background: "#ff9800",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 8px auto"
                    }}>
                      <AiOutlineTrophy size={24} color="#fff" />
                    </div>
                    <p style={{ 
                      fontSize: "12px", 
                      fontWeight: "600",
                      margin: 0
                    }}>Достижение {item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Модальное окно QR кода */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
            }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              style={{
                background: user.theme === "light" ? "#fff" : "#2d2d2d",
                borderRadius: "16px",
                padding: "20px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginBottom: "20px"
              }}>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>Мой QR код</h3>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowQR(false)}
                  style={{ 
                    background: "none", 
                    border: "none", 
                    cursor: "pointer", 
                    fontSize: "20px",
                    color: user.theme === "light" ? "#333" : "#fff"
                  }}
                >
                  <AiOutlineClose />
                </motion.button>
              </div>
              
              {generateQRCode()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Модальное окно шаринга */}
      <AnimatePresence>
        {showShareOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "20px",
            }}
            onClick={() => setShowShareOptions(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              style={{
                background: user.theme === "light" ? "#fff" : "#2d2d2d",
                borderRadius: "16px",
                padding: "20px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginBottom: "20px"
              }}>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>Поделиться профилем</h3>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowShareOptions(false)}
                  style={{ 
                    background: "none", 
                    border: "none", 
                    cursor: "pointer", 
                    fontSize: "20px",
                    color: user.theme === "light" ? "#333" : "#fff"
                  }}
                >
                  <AiOutlineClose />
                </motion.button>
              </div>
              
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "16px",
                textAlign: "center"
              }}>
                {[
                  { name: "WhatsApp", color: "#25D366" },
                  { name: "Telegram", color: "#0088cc" },
                  { name: "Instagram", color: "#E1306C" },
                  { name: "Facebook", color: "#1877F2" },
                  { name: "Twitter", color: "#1DA1F2" },
                  { name: "Ссылка", color: "#007bff" }
                ].map((app) => (
                  <motion.div
                    key={app.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => shareProfile(app.name)}
                    style={{
                      background: user.theme === "light" ? "#f5f5f5" : "#333",
                      borderRadius: "12px",
                      padding: "12px",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{
                      width: "40px",
                      height: "40px",
                      background: app.color,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 8px auto",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "14px"
                    }}>
                      {app.name.charAt(0)}
                    </div>
                    <p style={{ 
                      fontSize: "12px", 
                      fontWeight: "500",
                      margin: 0
                    }}>{app.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Profile;