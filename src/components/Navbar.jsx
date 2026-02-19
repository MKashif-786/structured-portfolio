import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
  Avatar,
  Divider,
  Dialog,
  DialogContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/kashif.jpg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
  { label: "Chatbot", path: "/chatbot" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false); // <-- new state
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          background: darkMode
            ? "rgba(18,18,18,0.9)"
            : "rgba(255,255,255,0.95)",
          borderBottom: darkMode
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ py: { xs: 0.8, sm: 1 }, justifyContent: "space-between" }}>
          {/* LEFT LOGO + TEXT */}
          <Box
            component={Link}
            to="/"
            onClick={(e) => {
              e.preventDefault(); // prevent default routing
              setOpenProfile(true); // open profile modal
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              "&:hover": { opacity: 0.85 },
            }}
          >
            <Avatar
              src={logo}
              sx={{
                width: { xs: 45, sm: 55 },
                height: { xs: 45, sm: 55 },
                border: "2px solid #1976d2",
                mr: { xs: 0.8, sm: 1.2 },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "0.95rem", sm: "1.3rem", md: "1.5rem" },
                background: "linear-gradient(45deg, #1976d2, #9c27b0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Muhammad Kashif
            </Typography>
          </Box>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: { xs: 1.5, sm: 3 } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "0.85rem", sm: "1.05rem", md: "1.1rem" },
                  borderRadius: 2,
                  px: { xs: 2, sm: 3 },
                  py: { xs: 0.8, sm: 1 },
                  background:
                    location.pathname === item.path
                      ? "linear-gradient(45deg, #1976d2, #9c27b0)"
                      : "transparent",
                  color:
                    location.pathname === item.path
                      ? "#fff"
                      : darkMode
                        ? "#fff"
                        : "#000",
                  transition: "0.3s",
                  "&:hover": {
                    background: "linear-gradient(45deg, #1976d2, #9c27b0)",
                    color: "#fff",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Box>

          {/* MOBILE MENU ICON */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              color: darkMode ? "#fff" : "#000", // black in light mode, white in dark mode
            }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: 240, sm: 280 },
            backdropFilter: "blur(12px)",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 240, sm: 280 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
          }}
        >
          <Avatar
            src={logo}
            sx={{
              width: { xs: 70, sm: 90 },
              height: { xs: 70, sm: 90 },
              mb: 2,
              border: "3px solid #1976d2",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.4rem" },
              textAlign: "center",
            }}
          >
            Muhammad Kashif
          </Typography>
          <Divider sx={{ my: 2, width: "100%" }} />
          <List sx={{ width: "100%" }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    textAlign: "center",
                    borderRadius: 2,
                    mb: 1,
                    py: { xs: 1, sm: 1.5 },
                    background:
                      location.pathname === item.path
                        ? "linear-gradient(45deg, #1976d2, #9c27b0)"
                        : "transparent",
                    color:
                      location.pathname === item.path
                        ? "#fff"
                        : darkMode
                          ? "#fff"
                          : "#000",
                    fontWeight: 600,
                    fontSize: { xs: "0.95rem", sm: "1.1rem" },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box mt={2}>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Box>
        </Box>
      </Drawer>

      {/* PROFILE IMAGE MODAL */}
      <Dialog open={openProfile} onClose={() => setOpenProfile(false)} maxWidth="xs" fullWidth>
        <DialogContent sx={{ display: "flex", justifyContent: "center", p: 3 }}>
          <Avatar
            src={logo}
            sx={{
              width: { xs: 200, sm: 250 },
              height: { xs: 200, sm: 250 },
              border: "3px solid #1976d2",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
