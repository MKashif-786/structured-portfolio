import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid,
  Paper,
  Link,
  Button,
  useTheme,
} from "@mui/material";
import pdf from "../assets/pdf.pdf";
const skills = [
  "React",
  "MUI",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Numerical Analysis",
  "Mathematical Problem-Solving",
  "MS Word",
  "MS Excel",
  "MS PowerPoint",
  "Communication",
  "Teamwork",
  "Discipline",
];

export default function AboutPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        p: { xs: 3, sm: 6 },
        display: "flex",
        flexDirection: "column",
        gap: 6,
        background: isDark
          ? "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(to right, #e0f7fa, #e1bee7)",
        transition: "all 0.5s ease",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          textAlign: "center",
          mb: 4,
          color: isDark ? "#fff" : "#222",
          fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
        }}
      >
        About Me
      </Typography>

      {/* Personal Info Card */}
      <Paper
        elevation={isDark ? 12 : 8}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          backdropFilter: "blur(15px)",
          backgroundColor: isDark
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.95)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: isDark
              ? "0px 15px 35px rgba(0,0,0,0.6)"
              : "0px 15px 30px rgba(0,0,0,0.2)",
          },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: isDark ? "#fff" : "#222",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          }}
        >
          Muhammad Kashif
        </Typography>

        <Typography
          sx={{
            color: isDark ? "#ccc" : "#555",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          }}
        >
          Vehari, Punjab, Pakistan
        </Typography>

        <Typography
          sx={{
            color: isDark ? "#ccc" : "#555",
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
          }}
        >
          📞 0323-8325113 | ✉️{" "}
          <Link
            href="mailto:kashif8325113@gmail.com"
            underline="hover"
            color="inherit"
            sx={{ fontWeight: 600 }}
          >
            kashif8325113@gmail.com
          </Link>
        </Typography>

        {/* CV Buttons */}
        <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            href={pdf}
            target="_blank"
            sx={{
              borderRadius: 3,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              background: isDark
                ? "linear-gradient(45deg, #00c6ff, #0072ff)"
                : "linear-gradient(45deg, #1976d2, #42a5f5)",
              "&:hover": { opacity: 0.9, transform: "scale(1.05)" },
              transition: "all 0.3s ease",
            }}
          >
            Preview CV
          </Button>

          <Button
            variant="outlined"
            href={pdf}
            download
            sx={{
              borderRadius: 3,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              borderColor: isDark ? "#00c6ff" : "#1976d2",
              color: isDark ? "#00c6ff" : "#1976d2",
              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(0,198,255,0.1)"
                  : "rgba(25,118,210,0.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Download CV
          </Button>
        </Box>
      </Paper>

      {/* Education Card */}
      <Paper
        elevation={isDark ? 12 : 8}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          backdropFilter: "blur(15px)",
          backgroundColor: isDark
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.95)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: isDark
              ? "0px 15px 35px rgba(0,0,0,0.6)"
              : "0px 15px 30px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: isDark ? "#fff" : "#222",
            fontSize: { xs: "1.5rem", sm: "1.8rem" },
          }}
        >
          Education
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: isDark ? "#ccc" : "#555",
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              <strong>Bachelor of Science (Mathematics)</strong>
              <br />
              Govt. Post Graduate College, Vehari, 2021
              <br />
              Marks: 566 / 800
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: isDark ? "#ccc" : "#555",
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              <strong>Intermediate (F.Sc)</strong>
              <br />
              BISE, 2019
              <br />
              Marks: 701 / 1100
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: isDark ? "#ccc" : "#555",
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              <strong>Matriculation (Science)</strong>
              <br />
              BISE, 2017
              <br />
              Marks: 911 / 1100
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Skills Card */}
      <Paper
        elevation={isDark ? 12 : 8}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          backdropFilter: "blur(15px)",
          backgroundColor: isDark
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.95)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: isDark
              ? "0px 15px 35px rgba(0,0,0,0.6)"
              : "0px 15px 30px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: isDark ? "#fff" : "#222",
            fontSize: { xs: "1.5rem", sm: "1.8rem" },
          }}
        >
          Skills
        </Typography>

        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Chip
                label={skill}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  background: isDark
                    ? "linear-gradient(45deg, #00c6ff, #0072ff)"
                    : "linear-gradient(45deg, #6200ea, #ab47bc)",
                  color: "#fff",
                  "&:hover": { transform: "scale(1.05)" },
                  transition: "all 0.3s ease",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Profile Card */}
      <Paper
        elevation={isDark ? 12 : 8}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          backdropFilter: "blur(15px)",
          backgroundColor: isDark
            ? "rgba(255,255,255,0.05)"
            : "rgba(255,255,255,0.95)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: isDark
              ? "0px 15px 35px rgba(0,0,0,0.6)"
              : "0px 15px 30px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: isDark ? "#fff" : "#222",
            fontSize: { xs: "1.5rem", sm: "1.8rem" },
          }}
        >
          Profile
        </Typography>

        <Typography
          sx={{
            color: isDark ? "#ccc" : "#555",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            lineHeight: 1.7,
          }}
        >
          I am a mathematics graduate with strong analytical and problem-solving skills.
          Experienced in numerical analysis and web development using React and MUI.
          I bring strong communication, teamwork, and discipline to every project.
        </Typography>
      </Paper>
    </Box>
  );
}
