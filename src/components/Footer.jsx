import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "#fff", py: 3, mt: 5 }}>
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography>© 2026 Muhammad Kashif. All rights reserved.</Typography>
        <Box>
          <Link href="https://github.com/MKashif-786" sx={{ color: "#fff", mx: 1 }}><GitHubIcon /></Link>
          <Link href="https://www.linkedin.com/in/muhammad-kashif-4667342b0/" sx={{ color: "#fff", mx: 1 }}><LinkedInIcon /></Link>
        </Box>
        <Typography variant="caption">Designed & Built by Me</Typography>
      </Container>
    </Box>
  );
}
