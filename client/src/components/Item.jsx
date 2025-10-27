import { useReducer, useContext } from "react";
import goldImg from "../assets/gold.jpg";
import silverImg from "../assets/silver.jpeg";
import diamondImg from "../assets/diamond.jpg";
import platinumImg from "../assets/platinum.jpg";
import brassImg from "../assets/brass.jpg";
import sapphireImg from "../assets/sapphire.jpeg";
import styles from "../css/Item.module.css";
import { cartContext } from "../contexts/CartProvider.jsx";

function quantityReducer(quantity, action) {
    switch (action.type) {
        case 'increment':
            return quantity + 1;
        case 'decrement':
            return quantity > 0 ? quantity - 1 : 0;
        case 'reset':
            return 0;
        default:
            return quantity;
    }
}

const itemMap = {
    Gold: goldImg,
    Silver: silverImg,
    Diamond: diamondImg,
    Platinum: platinumImg,
    Brass: brassImg,
    Sapphire: sapphireImg

};

export default function Item({ name }) {
    const { setCartItems} = useContext(cartContext);
    const [quantity, dispatch] = useReducer(quantityReducer, 0);
    const price = 
    {
        Gold: 1000,
        Silver: 500,
        Diamond: 2000,
        Platinum: 3000,
        Brass: 4000,
        Sapphire: 6000
    }[name] || 0;


    function addToCart() {  
        setCartItems(prev => {
            if (prev[name]) {
                const updatedQuantity = prev[name].quantity + quantity;
                const newState = { ...prev, [name]: { price, "quantity": updatedQuantity } };
                return newState;
            }
            const newState = { ...prev, [name]: { price, quantity} };
            return newState;});
        dispatch({ type: "reset" });
    }

    return (
        <div className={styles.mainContainer}>
            <img src={itemMap[name]} alt={name} className={styles.image} />
            <div className={styles.details}>
                <p>item: {name}</p>
                <p>price: {price}</p>
                <p>Quantity: {quantity}</p>
                <div className={styles.quantity}>
                    <button
                        className={styles.symbols}
                        onClick={() => dispatch({ type: "increment" })}
                    >
                        +
                    </button>
                    <button
                        className={styles.symbols}
                        onClick={() => dispatch({ type: "decrement" })}
                    >
                        -
                    </button>
                </div>
                <button className={styles.cartButton} onClick = {addToCart} disabled={quantity === 0}>Add to cart</button>
            </div>
        </div>
    );
}
