import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import background from '../public/clean.jfif';
import './index.css'
import "./App.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
    <App />

    </div>
  </StrictMode>,
)
