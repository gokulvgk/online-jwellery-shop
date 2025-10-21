import {useContext} from "react";
import { cartContext } from "../contexts/CartProvider";
export default function BuyButton({setModal}) {
    const {cartItems, setCartItems} = useContext(cartContext);
    const handleClick = () => {
        setModal(prev => !prev);
        const username = localStorage.getItem("loggedInUser");
        const purchase = Object.entries(cartItems).map(([product , details]) => {
            console.log({username, product, ...details})
            return {username, product, ...details}});
        const status = fetch("http://localhost:8080/buy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(purchase),
        });
        console.log("Purchase initiated:", status);
    }

    const btn = {
        backgroundColor: "#614cedff",
        fontSize: "2rem",
        border: "none",
        color: "white",
        padding: "5px 20px",
        margin: "20px 20px 0px 0px",
        borderRadius: "5px",
        cursor: "pointer"
    }
    const div = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        bottom: "20px",
        width: "100%",
    };
    return (
        <div style={div}>
            <button style={btn} onClick = {handleClick}>Proceed to Buy</button>
        </div>     
    );
}