import { useState } from "react";
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
  AiOutlineHistory,
  AiOutlineTeam,
  AiOutlineMessage,
  AiOutlineCheckCircle
} from "react-icons/ai";
import { FiActivity, FiAward } from "react-icons/fi";

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
  });

  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [showAchievement, setShowAchievement] = useState(false);

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

      <h2 style={{ marginBottom: "8px", fontWeight: "600" }}>
        {user.firstName} {user.lastName}
      </h2>
      <p style={{ 
        color: user.theme === "light" ? "#555" : "#aaa", 
        marginBottom: "24px",
        fontSize: "14px"
      }}>
        {user.phone}
      </p>

      {/* Прогресс бар */}
      <div style={{
        width: "100%",
        background: user.theme === "light" ? "#eee" : "#333",
        borderRadius: "10px",
        height: "10px",
        marginBottom: "24px",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${Math.min(100, (user.points / 200) * 100)}%`,
          height: "100%",
          background: "linear-gradient(90deg, #00bcd4, #007bff)",
          borderRadius: "10px"
        }}></div>
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
        {/* ... (остальные карточки остаются аналогичными, но с адаптацией под тему) ... */}
        <motion.div
          whileHover={{ y: -5 }}
          style={{
            background: user.theme === "light" ? "linear-gradient(135deg, #e1f5fe, #81d4fa)" : "linear-gradient(135deg, #01579b, #0288d1)",
            borderRadius: "12px",
            padding: "16px",
            textAlign: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <AiOutlineStar size={36} color="#007bff" />
          <p style={{ marginTop: "8px", fontWeight: "bold" }}>Очки</p>
          <h3 style={{ color: "#007bff" }}>{user.points}</h3>
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
          }}
        >
          <AiOutlineCamera size={36} color="#673ab7" />
          <p style={{ marginTop: "8px", fontWeight: "bold" }}>Фото растений</p>
          <h3 style={{ color: "#673ab7" }}>{user.photoCount}</h3>
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
          <h3 style={{ color: "#e91e63" }}>{user.steps}</h3>
        </motion.div>
      </div>

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
    </motion.div>
  );
};

export default Profile;