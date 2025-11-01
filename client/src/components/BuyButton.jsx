import {useContext} from "react";
import { cartContext } from "../contexts/CartProvider";
export default function BuyButton({setModal}) {
    const {cartItems, setCartItems} = useContext(cartContext);
    const handleClick = () => {
        setModal(prev => !prev);
        const username = sessionStorage.getItem("loggedInUser");
        const purchase = Object.entries(cartItems).map(([product , details]) => {
            return {username, product, ...details}});
        const status = fetch("http://localhost:8080/buy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purchase),
        });
    }

    const btn = {
        background: "linear-gradient(155deg, #007bff, #0ff)",
        fontSize: "2rem",
        border: "none",
        color: "white",
        padding: "5px 15px",
        borderRadius: "5px",
        cursor: "pointer"
    }
    const div = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // position: "fixed",
        bottom: "10px",
        marginTop: "20px",
        zIndex: "-1"
    };
    return (
        <div style={div}>
            <button style={btn} onClick = {handleClick}>Buy Now</button>
        </div>     
    );
}