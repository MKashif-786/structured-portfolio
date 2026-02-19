import React, { useState, useMemo } from "react";
import { CssBaseline, Container, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import ChatbotPage from "./Pages/ChatbotPage";
import Services from "./Pages/Services";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: darkMode ? "dark" : "light", primary: { main: "#1976d2" } },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Container maxWidth="lg" disableGutters sx={{ mt: 8 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<HomePage />} /> {/* fallback to home */}
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
