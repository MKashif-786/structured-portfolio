import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  useTheme,
} from "@mui/material";

// Sample project data
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built with React and MUI, featuring an interactive chatbot and smooth animations.",
    image: "https://via.placeholder.com/400x250.png?text=Portfolio+Website",
    link: "#",
  },
  {
    title: "E-commerce App",
    description:
      "Full-stack e-commerce application using React and Node.js with authentication and cart functionality.",
    image: "https://via.placeholder.com/400x250.png?text=E-commerce+App",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description:
      "Interactive AI chatbot integrated into a portfolio website for smart navigation and assistance.",
    image: "https://via.placeholder.com/400x250.png?text=AI+Chatbot",
    link: "#",
  },
];

export default function ProjectsPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        p: 4,
        background: isDark
          ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(to right, #5a7296, #3993a3)",
        transition: "all 0.4s ease",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 5,
          color: isDark ? "#fff" : "#000",
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={isDark ? 8 : 6}
              sx={{
                position: "relative",
                borderRadius: 4,
                overflow: "hidden",
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.9)",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "translateY(-12px) scale(1.02)",
                  boxShadow: isDark
                    ? "0px 15px 30px rgba(0,0,0,0.7)"
                    : "0px 15px 30px rgba(0,0,0,0.3)",
                },
              }}
            >
              {/* Image Section */}
              <Box
                sx={{
                  height: 220,
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: isDark
                      ? "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  }}
                />
              </Box>

              {/* Content Section */}
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: isDark ? "#fff" : "#000",
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: isDark ? "#ccc" : "#555",
                  }}
                >
                  {project.description}
                </Typography>

                <Button
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: "bold",
                    background: isDark
                      ? "linear-gradient(45deg, #00c6ff, #0072ff)"
                      : "linear-gradient(45deg, #1976d2, #42a5f5)",
                    "&:hover": {
                      opacity: 0.9,
                      transform: "scale(1.05)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  View Project
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
