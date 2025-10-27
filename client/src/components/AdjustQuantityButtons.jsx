import { cartContext } from "../contexts/CartProvider";
import { useContext } from "react";
const btn ={
    fontSize: '1.2rem',
    cursor: 'pointer',
    width: '30px',
    height: '30px',
}

const div = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
}
export default function AdjustQuantityButtons({itemName}) {
    const {adjustItemQuantity} = useContext(cartContext);
    return (
        <div style={div}>
            <button style = {btn} onClick = {() => adjustItemQuantity(itemName,"increment")}>+</button>
            <button style = {btn} onClick = {() => adjustItemQuantity(itemName,"decrement")}>-</button>
        </div>
    );
}