import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <Paper
      elevation={10} // strong shadow
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        cursor: "pointer",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        "&:hover": {
          transform: "translateY(-12px) scale(1.02)", // subtle scale up
          boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
        },
      }}
    >
      {/* Project Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          transition: "transform 0.5s ease",
          "&:hover": { transform: "scale(1.1)" }, // zoom effect
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
        }}
      />

      {/* Project Info */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          p: 2,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          transform: "translateY(100%)",
          opacity: 0,
          transition: "all 0.4s ease",
          "&:hover": { transform: "translateY(0)", opacity: 1 }, // slide up
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        {link && (
          <Button
            href={link}
            target="_blank"
            rel="noopener"
            variant="contained"
            size="small"
            sx={{
              mt: 1,
              bgcolor: "#ff4081",
              "&:hover": { bgcolor: "#f50057", transform: "scale(1.05)" },
              transition: "all 0.3s",
            }}
          >
            View Project
          </Button>
        )}
      </Box>
    </Paper>
  );
}
