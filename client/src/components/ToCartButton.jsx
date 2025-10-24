import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../contexts/CartProvider.jsx";
import styles from "../css/ToCartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function ToCartButton() {
    const navigate = useNavigate();
    const { cartCount } = useContext(cartContext);

    return (
        <div className={styles.container}>
            <button
                className={styles.btn}
                onClick={() => navigate("/CartPage")}
            >
                <FaShoppingCart className={styles.icon} />
                <span className={styles.text}>Cart</span>
                {cartCount > 0 && (
                    <span className={styles.badge}>{cartCount}</span>
                )}
            </button>
        </div>
    );
}
