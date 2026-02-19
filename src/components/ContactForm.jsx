import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactForm() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        background: isDark
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(135deg, #e3f2fd, #f3e5f5)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          p: 4,
          borderRadius: 4,
          backdropFilter: "blur(15px)",
          backgroundColor: isDark
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.8)",
          boxShadow: isDark
            ? "0 8px 32px rgba(0,0,0,0.6)"
            : "0 8px 32px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 3,
            background: "linear-gradient(45deg, #1976d2, #9c27b0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Me
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              borderRadius: 3,
              py: 1.2,
              fontWeight: "bold",
              background: "linear-gradient(45deg, #1976d2, #9c27b0)",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(25,118,210,0.5)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>

        {/* Social Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 4,
          }}
        >
          <IconButton
            component="a"
            href="mailto:kashif8325113@gmail.com"
            target="_blank"
            rel="noopener"
            sx={{
              color: theme.palette.text.primary,
              transition: "0.3s",
              "&:hover": { color: "#ea4335", transform: "scale(1.2)" },
            }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/muhammadkashif/"
            target="_blank"
            rel="noopener"
            sx={{
              color: "#0A66C2",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.2)" },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>

          <IconButton
            component="a"
            href="https://github.com/yourgithubusername"
            target="_blank"
            rel="noopener"
            sx={{
              color: isDark ? "#fff" : "#000",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.2)", opacity: 0.8 },
            }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
