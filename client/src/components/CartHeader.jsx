import styles from '../css/CartItem.module.css';
import { cartContext } from '../contexts/CartProvider';
import { useContext } from 'react';

export default function CartHeader() {
    const { setCartItems } = useContext(cartContext);   
    return (
            <div  className={styles.mainContainer}>
            <div className = {styles.detail}><b>Item</b></div>
            <div className = {styles.detail}><b>Price</b></div>
            <div className = {styles.detail}><b>Quantity</b></div>
            <div className = {styles.detail}><b>Total price</b></div>
            <div className = {styles.detail}><b>Adjust quantity</b></div>
            <button className={styles.btn} onClick={()=>{setCartItems({})}}>Drop All</button>
        </div>
    );
}