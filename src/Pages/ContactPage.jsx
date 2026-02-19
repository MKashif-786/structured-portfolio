import React from "react";
import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <Box id="contact" sx={{ minHeight: "100vh", p: 4, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <ContactForm />
    </Box>
  );
}
