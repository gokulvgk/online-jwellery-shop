import {cartContext} from '../contexts/CartProvider';
import { useContext } from 'react';
import styles from '../css/CartItem.module.css';
export default function CartItem({name}) {
    const {cartItems, deleteCartItem} = useContext(cartContext);
    const item = cartItems[name];
    console.log(item.price);
    return (
        <div className={styles.mainContainer}>
            <div className = {styles.detail}>{name}</div>
            <div className = {styles.detail}>{item.price}</div>
            <div className = {styles.detail}>{item.quantity}</div>
            <div className = {styles.detail}>{item.price*item.quantity}</div>
            <button className={styles.btn} onClick={()=>deleteCartItem(name)}>X</button>
        </div>
    );
}