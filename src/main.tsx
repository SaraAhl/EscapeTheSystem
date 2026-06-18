import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { InventoryProvider } from "./context/InventoryContext";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
  <InventoryProvider>
    <App />
  </InventoryProvider>
</BrowserRouter>
  </StrictMode>,
)
