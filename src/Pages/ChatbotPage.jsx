import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ChatbotWidget from "../components/ChatbotWidget";

export default function ChatbotPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        background: isDark
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(135deg, #ede7f6, #e1f5fe)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(45deg, #1976d2, #9c27b0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Interactive AI Chatbot
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: 650,
          color: theme.palette.text.secondary,
          fontSize: "1.1rem",
          lineHeight: 1.7,
        }}
      >
        Ask me anything about Muhammad Kashif. I can provide information about
        education, skills, projects, and you can even preview or download the CV.
        The assistant is designed to guide you to relevant sections of the portfolio
        instantly.
      </Typography>

      {/* Chatbot */}
      <ChatbotWidget />
    </Box>
  );
}
