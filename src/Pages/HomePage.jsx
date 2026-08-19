import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box sx={{
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      gap: 3,
      bgcolor: "background.default",
      p: 4,
    }}>
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>Hi, I’m Muhammad Kashif</Typography>
      <Typography variant="h5" color="text.secondary">
        I build modern, responsive, and interactive web applications using React and MUI
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button component={Link} to="/projects" variant="contained" size="large">See My Work</Button>
        <Button component={Link} to="/chatbots" variant="outlined" size="large">Start Chatting</Button>
      </Box>
    </Box>
  );
}
