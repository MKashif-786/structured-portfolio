import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Code, Web, Brush, Devices, RocketLaunch } from "@mui/icons-material";
import "./Services.scss";

// Inline SVGs for each service
const serviceSVGs = {
  htmlCssJs: (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="8" fill="#f16529" />
      <path
        d="M16 14H48L44 50L32 56L20 50L16 14Z"
        fill="#fff"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  ),
  react: (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="6" fill="#61dafb" />
      <ellipse cx="32" cy="32" rx="20" ry="6" stroke="#61dafb" strokeWidth="2" />
      <ellipse
        cx="32"
        cy="32"
        rx="20"
        ry="6"
        stroke="#61dafb"
        strokeWidth="2"
        transform="rotate(60 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="20"
        ry="6"
        stroke="#61dafb"
        strokeWidth="2"
        transform="rotate(-60 32 32)"
      />
    </svg>
  ),
  sass: (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="28" fill="#cc6699" />
      <path d="M20 32C20 24 44 24 44 32C44 40 20 40 20 32Z" fill="#fff" />
    </svg>
  ),
  responsive: (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="14" y="12" width="36" height="40" rx="4" fill="#4caf50" />
      <rect x="22" y="20" width="20" height="24" rx="2" fill="#fff" />
    </svg>
  ),
  landing: (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="16" width="48" height="32" rx="4" fill="#f44336" />
      <circle cx="32" cy="32" r="8" fill="#fff" />
    </svg>
  ),
  maintenance: (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="28" stroke="#607d8b" strokeWidth="4" />
      <path
        d="M32 16V32L40 40"
        stroke="#607d8b"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  ),
};

// Service Data
const services = [
  {
    icon: <Code fontSize="large" sx={{ color: "#1976d2" }} />,
    title: "HTML, CSS & JavaScript",
    description:
      "Clean, modern, and responsive websites using HTML5, CSS3, and JavaScript ES6+. Semantic markup and cross-browser compatibility guaranteed.",
    details:
      "I create websites that are fully responsive, optimized, and modern. I follow best practices for SEO, accessibility, and maintainability. You get pixel-perfect layouts and smooth user experiences.",
    svg: serviceSVGs.htmlCssJs,
  },
  {
    icon: <Web fontSize="large" sx={{ color: "#9c27b0" }} />,
    title: "React & ReactJS Development",
    description:
      "Dynamic SPAs, component-based architecture, reusable UI components, state management, hooks, and modern best practices with ReactJS.",
    details:
      "I build modern React applications using functional components, hooks, context API, and state management libraries. Your app will be scalable, fast, and maintainable.",
    svg: serviceSVGs.react,
  },
  {
    icon: <Brush fontSize="large" sx={{ color: "#ff9800" }} />,
    title: "SASS & Modern CSS",
    description:
      "Styled components, SCSS variables, mixins, and modular styling. Clean, scalable, and maintainable styles for modern websites.",
    details:
      "I utilize SASS/SCSS for modular, reusable, and maintainable styling. Modern CSS techniques like Flexbox, Grid, and animations enhance UI/UX.",
    svg: serviceSVGs.sass,
  },
  {
    icon: <Devices fontSize="large" sx={{ color: "#4caf50" }} />,
    title: "Responsive Web Design",
    description:
      "Mobile-first responsive designs that look perfect on any device. Optimized layouts for smartphones, tablets, and desktops.",
    details:
      "Every website is mobile-first and fully responsive. I ensure layouts adapt seamlessly across all devices, maintaining usability and aesthetics.",
    svg: serviceSVGs.responsive,
  },
  {
    icon: <RocketLaunch fontSize="large" sx={{ color: "#f44336" }} />,
    title: "Landing Pages & UI/UX",
    description:
      "Professional landing pages with modern UI/UX, smooth animations, call-to-action buttons, and engaging user interfaces.",
    details:
      "I create high-converting landing pages with clear calls-to-action, clean UI, and engaging animations to attract users and clients.",
    svg: serviceSVGs.landing,
  },
  {
    icon: <Code fontSize="large" sx={{ color: "#607d8b" }} />,
    title: "Website Maintenance & Optimization",
    description:
      "Ongoing website maintenance, performance optimization, SEO basics, bug fixes, and security updates for live websites.",
    details:
      "I provide ongoing support and optimization for websites, including performance improvements, SEO basics, security updates, and bug fixes.",
    svg: serviceSVGs.maintenance,
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => setOpenIndex(index);
  const handleClose = () => setOpenIndex(null);

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        display: "flex",
        justifyContent: "center",
      }}
      className="services-page"
    >
      <Box sx={{ maxWidth: 1200, width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 6,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            background: "linear-gradient(45deg, #1976d2, #9c27b0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Services
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center" // center all cards horizontally
          alignItems="stretch"
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                className="service-card"
                sx={{
                  minHeight: "350px",
                  maxWidth: 360,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Box sx={{ mb: 2, fontSize: "2.2rem" }}>{service.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: "1.2rem", sm: "1.4rem" },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(index)}
                    sx={{
                      background: "linear-gradient(45deg, #1976d2, #9c27b0)",
                      color: "#fff",
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>

                {/* Modal */}
                <Dialog
                  open={openIndex === index}
                  onClose={handleClose}
                  fullWidth
                  maxWidth="sm"
                >
                  <DialogTitle sx={{ fontWeight: 700 }}>
                    {service.title}
                  </DialogTitle>
                  <DialogContent dividers sx={{ textAlign: "center" }}>
                    <Box sx={{ mb: 2 }}>{service.svg}</Box>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      {service.details}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Technologies & Tools: HTML, CSS, JavaScript, React, MUI, SASS
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
