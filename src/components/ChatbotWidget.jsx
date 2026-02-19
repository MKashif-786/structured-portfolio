import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  IconButton,
  Modal,
  Paper,
  Typography,
  TextField,
  Button,
  useTheme
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

const responses = [
  // Basic Intro
  { question: /hi|hello|hey/i, answer: "Hello! 👋 I'm Muhammad Kashif’s portfolio assistant. How can I help you today?" },
  { question: /who are you/i, answer: "I'm an interactive AI assistant built to guide you through Muhammad Kashif’s portfolio." },
  { question: /who is muhammad kashif/i, answer: "Muhammad Kashif is a frontend developer with a background in Mathematics and strong analytical skills.", action: "about" },

  // About
  { question: /about/i, answer: "Muhammad Kashif is a mathematics graduate and frontend developer skilled in React and MUI.", action: "about" },
  { question: /location|where.*from/i, answer: "He is based in Vehari, Punjab, Pakistan." },
  { question: /experience/i, answer: "He has practical experience building modern React and MUI portfolio applications." },

  // Education
  { question: /education/i, answer: "He completed a Bachelor of Science in Mathematics in 2021." },
  { question: /degree/i, answer: "BSc in Mathematics." },
  { question: /university|college/i, answer: "Govt. Post Graduate College, Vehari." },

  // Skills
  { question: /skills/i, answer: "React, MUI, JavaScript, HTML, CSS, Node.js, Numerical Analysis, MS Office.", action: "about" },
  { question: /react/i, answer: "He builds responsive modern interfaces using React and MUI." },
  { question: /javascript/i, answer: "Strong knowledge of JavaScript including ES6+ features." },
  { question: /node/i, answer: "Basic backend knowledge using Node.js." },
  { question: /css|html/i, answer: "Experienced in building responsive layouts using HTML and CSS." },

  // Projects
  { question: /projects/i, answer: "He has built interactive portfolio and frontend applications.", action: "projects" },
  { question: /work/i, answer: "You can explore his recent frontend projects.", action: "projects" },
  { question: /portfolio/i, answer: "This portfolio showcases his frontend and analytical skills." },

  // CV
  { question: /cv|resume/i, answer: "You can preview or download his CV below.", action: "cv" },

  // Contact
  { question: /contact/i, answer: "You can reach him via email or LinkedIn.", action: "contact" },
  { question: /email/i, answer: "Email: kashif8325113@gmail.com" },
  { question: /phone/i, answer: "Phone: 0323-8325113" },
  { question: /linkedin/i, answer: "Visit his LinkedIn profile for professional updates.", action: "links" },

  // Personality & Strength
  { question: /strength/i, answer: "Strong analytical thinking, problem-solving, and discipline." },
  { question: /teamwork/i, answer: "He values teamwork and collaborative problem solving." },
  { question: /communication/i, answer: "Strong communication skills in professional environments." },

  // Career
  { question: /job/i, answer: "He is open to frontend development opportunities." },
  { question: /hire/i, answer: "You can contact him for frontend development roles or collaboration.", action: "contact" },

  // Tools
  { question: /mui/i, answer: "He uses Material UI for modern and consistent design systems." },
  { question: /ms office/i, answer: "Proficient in MS Word, Excel, and PowerPoint." },

  // Quick Short Questions
  { question: /age/i, answer: "Please contact directly for personal details." },
  { question: /github/i, answer: "You can visit his GitHub profile.", action: "links" },
  { question: /available/i, answer: "Yes, available for frontend projects and collaborations." },

  // Analytical Skills
  { question: /mathematics/i, answer: "He has strong foundations in Mathematics and numerical analysis." },
  { question: /problem solving/i, answer: "Analytical thinking is one of his strongest skills." },

  // Extra Professional Questions
  { question: /why hire/i, answer: "Because he combines analytical thinking with modern frontend development skills." },
  { question: /goal/i, answer: "To build professional, scalable, and visually appealing web applications." },
  { question: /future/i, answer: "He aims to grow as a full-stack developer." },

  // Default
  { question: /.*/, answer: "You can explore his About, Projects, or Contact sections for detailed information.", action: "about" }
];


export default function ChatbotWidget() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I’m your portfolio assistant. Ask me anything about Muhammad Kashif." }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);

    const response = responses.find(r => r.question.test(input));

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: response.answer, action: response.action }
      ]);
    }, 500);

    setInput("");
  };

  const handleActionClick = (action) => {
  switch (action) {
    case "about":
      navigate("/about");
      break;

    case "projects":
      navigate("/projects");
      break;

    case "contact":
      navigate("/contact");
      break;

    case "cv":
      window.open("/Muhammad_Kashif_CV.pdf", "_blank");
      break;

    case "links":
      window.open("https://www.linkedin.com/in/muhammadkashif/", "_blank");
      break;

    default:
      break;
  }

  setOpen(false); // optional: auto close chatbot after click
};
const navigate = useNavigate();
  return (
    <>
      {/* Floating Button */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          width: 65,
          height: 65,
          borderRadius: "50%",
          zIndex: 1000,
          background: "linear-gradient(45deg, #1976d2, #9c27b0)",
          color: "#fff",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.5)"
          }
        }}
      >
        <ChatIcon fontSize="large" />
      </IconButton>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Paper
          sx={{
            position: "fixed",
            bottom: 110,
            right: 30,
            width: { xs: "92%", sm: 420 },
            maxHeight: 800,
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            p: 2,
            backdropFilter: "blur(15px)",
            backgroundColor: isDark
              ? "rgba(30,30,30,0.9)"
              : "rgba(255,255,255,0.95)",
            boxShadow: isDark
              ? "0 8px 32px rgba(0,0,0,0.7)"
              : "0 8px 32px rgba(0,0,0,0.2)",
            animation: "fadeIn 0.3s ease"
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(45deg, #1976d2, #9c27b0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Portfolio Assistant
            </Typography>
            <Button size="small" onClick={() => setOpen(false)}>
              Close
            </Button>
          </Box>

          {/* Messages */}
          <Box sx={{ flex: 1, overflowY: "auto", mb: 1 }}>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  mb: 1
                }}
              >
                <Paper
                  sx={{
                    p: 1.5,
                    maxWidth: "80%",
                    borderRadius: 3,
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(45deg, #1976d2, #9c27b0)"
                        : isDark
                        ? "#2a2a2a"
                        : "#f0f0f0",
                    color:
                      msg.sender === "user"
                        ? "#fff"
                        : theme.palette.text.primary
                  }}
                >
                  <Typography variant="body2">{msg.text}</Typography>

                  {msg.action && msg.sender === "bot" && (
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        mt: 1,
                        borderRadius: 2,
                        background: "linear-gradient(45deg, #1976d2, #9c27b0)"
                      }}
                      onClick={() => handleActionClick(msg.action)}
                    >
                      {msg.action === "cv" ? "Download CV" : "View"}
                    </Button>
                  )}
                </Paper>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>
<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
  {[
    "Who is Muhammad Kashif?",
    "What are your skills?",
    "Show me your projects",
    "Download CV",
    "How can I contact you?"
  ].map((question, index) => (
    <Button
      key={index}
      size="small"
      variant="outlined"
      onClick={() => {
        setInput(question);
        setTimeout(() => sendMessage(), 100);
      }}
      sx={{
        borderRadius: 5,
        textTransform: "none",
      }}
    >
      {question}
    </Button>
  ))}
</Box>

          {/* Input */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <IconButton
              onClick={sendMessage}
              sx={{
                background: "linear-gradient(45deg, #1976d2, #9c27b0)",
                color: "#fff",
                "&:hover": { transform: "scale(1.1)" }
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Modal>
    </>
  );
}
