import {useNavigate} from "react-router-dom";
import styles from "../css/ToCartButton.module.css";
export default function ToCartButton() {
    const navigate = useNavigate();
    return (
        <div className = {styles.container}>
            <button className={styles.btn} onClick = {()=>navigate("/CartPage")}>Go to cart</button>
        </div>
    );
}