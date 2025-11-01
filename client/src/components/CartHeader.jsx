import styles from '../css/CartItem.module.css';
import { cartContext } from '../contexts/CartProvider';
import { useContext } from 'react';

export default function CartHeader() {
    const { setCartItems } = useContext(cartContext);   
    return (
            <div  className={styles.cartHeader}>
            <h3 className = {styles.detail}>Item</h3>
            <h3 className = {styles.detail}>Price</h3>
            <h3 className = {styles.detail}>Quantity</h3>
            <h3 className = {styles.detail}>Total price</h3>
            <h3 className = {styles.detail}>Adjust quantity</h3>
            <button className={styles.btn} onClick={()=>{setCartItems({})}}>Drop All</button>
        </div>
    );
}