import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/main.css"
import App from './App.jsx'
import CartProvider from "./contexts/CartProvider.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
   </StrictMode>
)
