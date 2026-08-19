// import React, { useEffect, useRef, useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   IconButton,
//   Button,
//   Avatar,
//   Fade,
//   Divider,
//   Chip,
// } from "@mui/material";

// import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import SendRoundedIcon from "@mui/icons-material/SendRounded";
// import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import MinimizeRoundedIcon from "@mui/icons-material/MinimizeRounded";

// export default function ChatbotWidget() {
//   const [open, setOpen] = useState(false);
//   const [minimized, setMinimized] = useState(false);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: "bot",
//       text: "Hi! 👋 I'm Kashif's portfolio assistant. How can I help you?",
//       time: "Now",
//     },
//   ]);

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, isTyping]);

//   const quickQuestions = [
//     "Who is Muhammad Kashif?",
//     "What are your skills?",
//     "Show me your projects",
//     "How can I contact you?",
//   ];

//   const getBotResponse = (question) => {
//     const text = question.toLowerCase();

//     if (text.includes("who") || text.includes("about")) {
//       return "Muhammad Kashif is a frontend developer with a background in Mathematics. He works with modern web technologies including React, JavaScript, HTML, CSS and MUI.";
//     }

//     if (text.includes("skill")) {
//       return "Kashif's skills include HTML, CSS, JavaScript, React, MUI, Node.js, Git, responsive web development and problem solving.";
//     }

//     if (text.includes("project") || text.includes("work")) {
//       return "He has worked on several frontend projects including portfolio applications, e-commerce interfaces, dashboards and interactive web applications.";
//     }

//     if (text.includes("contact") || text.includes("hire")) {
//       return "You can contact Muhammad Kashif through his email or LinkedIn profile. He's open to frontend development opportunities and collaborations.";
//     }

//     if (text.includes("react")) {
//       return "Yes! React is one of Kashif's main frontend technologies. He uses React to build reusable, responsive and interactive interfaces.";
//     }

//     if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
//       return "Hello! 👋 Nice to meet you. Feel free to ask me about Kashif's skills, projects, experience or contact information.";
//     }

//     return "That's an interesting question! You can ask me about Muhammad Kashif's skills, projects, React experience, background or how to contact him.";
//   };

//   const sendMessage = (message = input) => {
//     const text = message.trim();

//     if (!text || isTyping) return;

//     const userMessage = {
//       id: Date.now(),
//       sender: "user",
//       text,
//       time: "Now",
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsTyping(true);

//     setTimeout(() => {
//       const botMessage = {
//         id: Date.now() + 1,
//         sender: "bot",
//         text: getBotResponse(text),
//         time: "Now",
//       };

//       setMessages((prev) => [...prev, botMessage]);
//       setIsTyping(false);
//     }, 900);
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       {!open && (
//         <Box
//           sx={{
//             position: "fixed",
//             right: { xs: 18, sm: 28 },
//             bottom: { xs: 18, sm: 28 },
//             zIndex: 1500,
//           }}
//         >
//           <IconButton
//             onClick={() => setOpen(true)}
//             sx={{
//               width: 64,
//               height: 64,
//               color: "#fff",
//               background:
//                 "linear-gradient(135deg, #1976d2 0%, #7b1fa2 100%)",
//               boxShadow: "0 12px 35px rgba(25,118,210,0.35)",
//               transition: "all 0.3s ease",

//               "&:hover": {
//                 transform: "scale(1.08)",
//                 background:
//                   "linear-gradient(135deg, #1565c0 0%, #6a1b9a 100%)",
//               },
//             }}
//           >
//             <ChatRoundedIcon sx={{ fontSize: 31 }} />
//           </IconButton>
//         </Box>
//       )}

//       {/* Chat Window */}
//       <Fade in={open}>
//         <Paper
//           elevation={20}
//           sx={{
//             display: open ? "flex" : "none",
//             flexDirection: "column",

//             position: "fixed",
//             zIndex: 1600,

//             right: { xs: 12, sm: 28 },
//             bottom: { xs: 12, sm: 28 },

//             width: {
//               xs: "calc(100vw - 24px)",
//               sm: 410,
//             },

//             height: minimized ? "auto" : {
//               xs: "calc(100vh - 90px)",
//               sm: 620,
//             },

//             maxHeight: "700px",

//             overflow: "hidden",

//             borderRadius: {
//               xs: 3,
//               sm: 4,
//             },

//             backgroundColor: "background.paper",

//             border: "1px solid",
//             borderColor: "divider",

//             boxShadow:
//               "0 25px 70px rgba(0,0,0,0.25)",

//             transition: "all 0.3s ease",
//           }}
//         >
//           {/* Header */}
//           <Box
//             sx={{
//               p: 2,
//               display: "flex",
//               alignItems: "center",
//               gap: 1.5,

//               background:
//                 "linear-gradient(135deg, #1976d2 0%, #7b1fa2 100%)",

//               color: "#fff",
//             }}
//           >
//             {/* Bot Avatar */}
//             <Avatar
//               sx={{
//                 width: 44,
//                 height: 44,
//                 backgroundColor: "rgba(255,255,255,0.18)",
//                 border: "1px solid rgba(255,255,255,0.3)",
//               }}
//             >
//               <SmartToyRoundedIcon />
//             </Avatar>

//             {/* Title */}
//             <Box sx={{ flex: 1 }}>
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   fontWeight: 700,
//                   lineHeight: 1.2,
//                 }}
//               >
//                 Portfolio Assistant
//               </Typography>

//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 0.7,
//                   mt: 0.4,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: 7,
//                     height: 7,
//                     borderRadius: "50%",
//                     backgroundColor: "#4caf50",
//                   }}
//                 />

//                 <Typography
//                   variant="caption"
//                   sx={{ opacity: 0.9 }}
//                 >
//                   Online
//                 </Typography>
//               </Box>
//             </Box>

//             {/* Minimize */}
//             <IconButton
//               onClick={() => setMinimized((prev) => !prev)}
//               sx={{
//                 color: "#fff",
//                 "&:hover": {
//                   backgroundColor: "rgba(255,255,255,0.12)",
//                 },
//               }}
//             >
//               <MinimizeRoundedIcon />
//             </IconButton>

//             {/* Close */}
//             <IconButton
//               onClick={() => setOpen(false)}
//               sx={{
//                 color: "#fff",
//                 "&:hover": {
//                   backgroundColor: "rgba(255,255,255,0.12)",
//                 },
//               }}
//             >
//               <CloseRoundedIcon />
//             </IconButton>
//           </Box>

//           {!minimized && (
//             <>
//               {/* Welcome Area */}
//               <Box
//                 sx={{
//                   px: 2,
//                   py: 1.5,
//                   backgroundColor: "action.hover",
//                 }}
//               >
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                 >
//                   Ask me anything about Kashif's
//                   background, skills or projects.
//                 </Typography>
//               </Box>

//               {/* Messages */}
//               <Box
//                 sx={{
//                   flex: 1,
//                   overflowY: "auto",
//                   p: 2,

//                   "&::-webkit-scrollbar": {
//                     width: 5,
//                   },

//                   "&::-webkit-scrollbar-thumb": {
//                     borderRadius: 10,
//                     backgroundColor: "rgba(128,128,128,0.3)",
//                   },
//                 }}
//               >
//                 {messages.map((message) => {
//                   const isUser = message.sender === "user";

//                   return (
//                     <Box
//                       key={message.id}
//                       sx={{
//                         display: "flex",
//                         justifyContent: isUser
//                           ? "flex-end"
//                           : "flex-start",

//                         mb: 2,
//                         gap: 1,
//                       }}
//                     >
//                       {!isUser && (
//                         <Avatar
//                           sx={{
//                             width: 30,
//                             height: 30,
//                             background:
//                               "linear-gradient(135deg, #1976d2, #7b1fa2)",
//                           }}
//                         >
//                           <SmartToyRoundedIcon
//                             sx={{ fontSize: 17 }}
//                           />
//                         </Avatar>
//                       )}

//                       <Box
//                         sx={{
//                           maxWidth: "78%",
//                         }}
//                       >
//                         <Paper
//                           elevation={0}
//                           sx={{
//                             px: 1.5,
//                             py: 1.2,

//                             borderRadius: isUser
//                               ? "18px 18px 4px 18px"
//                               : "18px 18px 18px 4px",

//                             background: isUser
//                               ? "linear-gradient(135deg, #1976d2, #7b1fa2)"
//                               : "action.hover",

//                             color: isUser
//                               ? "#fff"
//                               : "text.primary",
//                           }}
//                         >
//                           <Typography
//                             variant="body2"
//                             sx={{
//                               lineHeight: 1.55,
//                               whiteSpace: "pre-wrap",
//                             }}
//                           >
//                             {message.text}
//                           </Typography>
//                         </Paper>

//                         <Typography
//                           variant="caption"
//                           color="text.secondary"
//                           sx={{
//                             display: "block",
//                             mt: 0.4,
//                             px: 0.5,
//                             textAlign: isUser
//                               ? "right"
//                               : "left",
//                           }}
//                         >
//                           {message.time}
//                         </Typography>
//                       </Box>

//                       {isUser && (
//                         <Avatar
//                           sx={{
//                             width: 30,
//                             height: 30,
//                             backgroundColor: "action.selected",
//                             color: "text.secondary",
//                           }}
//                         >
//                           <PersonRoundedIcon
//                             sx={{ fontSize: 17 }}
//                           />
//                         </Avatar>
//                       )}
//                     </Box>
//                   );
//                 })}

//                 {/* Typing Indicator */}
//                 {isTyping && (
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 1,
//                       mb: 2,
//                     }}
//                   >
//                     <Avatar
//                       sx={{
//                         width: 30,
//                         height: 30,
//                         background:
//                           "linear-gradient(135deg, #1976d2, #7b1fa2)",
//                       }}
//                     >
//                       <SmartToyRoundedIcon
//                         sx={{ fontSize: 17 }}
//                       />
//                     </Avatar>

//                     <Paper
//                       elevation={0}
//                       sx={{
//                         px: 2,
//                         py: 1.2,
//                         borderRadius: 3,
//                         backgroundColor: "action.hover",
//                       }}
//                     >
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                       >
//                         ● ● ●
//                       </Typography>
//                     </Paper>
//                   </Box>
//                 )}

//                 <div ref={messagesEndRef} />
//               </Box>

//               <Divider />

//               {/* Quick Questions */}
//               <Box
//                 sx={{
//                   px: 1.5,
//                   pt: 1.2,
//                   overflowX: "auto",
//                   display: "flex",
//                   gap: 0.8,

//                   "&::-webkit-scrollbar": {
//                     display: "none",
//                   },
//                 }}
//               >
//                 {quickQuestions.map((question) => (
//                   <Chip
//                     key={question}
//                     label={question}
//                     onClick={() => sendMessage(question)}
//                     variant="outlined"
//                     size="small"
//                     sx={{
//                       flexShrink: 0,
//                       cursor: "pointer",
//                       borderRadius: 3,

//                       "&:hover": {
//                         backgroundColor: "action.hover",
//                       },
//                     }}
//                   />
//                 ))}
//               </Box>

//               {/* Input */}
//               <Box
//                 sx={{
//                   p: 1.5,
//                   display: "flex",
//                   gap: 1,
//                   alignItems: "center",
//                 }}
//               >
//                 <TextField
//                   fullWidth
//                   size="small"
//                   value={input}
//                   placeholder="Ask something..."
//                   onChange={(e) =>
//                     setInput(e.target.value)
//                   }
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       sendMessage();
//                     }
//                   }}
//                   sx={{
//                     "& .MuiOutlinedInput-root": {
//                       borderRadius: 3,
//                     },
//                   }}
//                 />

//                 <IconButton
//                   onClick={() => sendMessage()}
//                   disabled={!input.trim() || isTyping}
//                   sx={{
//                     width: 44,
//                     height: 44,
//                     color: "#fff",

//                     background:
//                       "linear-gradient(135deg, #1976d2, #7b1fa2)",

//                     "&:hover": {
//                       background:
//                         "linear-gradient(135deg, #1565c0, #6a1b9a)",
//                     },

//                     "&.Mui-disabled": {
//                       backgroundColor: "action.disabledBackground",
//                     },
//                   }}
//                 >
//                   <SendRoundedIcon />
//                 </IconButton>
//               </Box>

//               {/* Footer */}
//               <Typography
//                 variant="caption"
//                 color="text.secondary"
//                 sx={{
//                   textAlign: "center",
//                   pb: 1,
//                 }}
//               >
//                 AI Portfolio Assistant
//               </Typography>
//             </>
//           )}
//         </Paper>
//       </Fade>
//     </>
//   );
// }