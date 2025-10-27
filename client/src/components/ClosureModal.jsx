import Modal from "./Modal";
import { cartContext } from "../contexts/CartProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const btn = {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    width: "25px",
    aspectRatio: '1/1',
    cursor: 'pointer',
    borderRadius: '5px'
};

const p ={
    textAlign: 'center',
}
export default function ClosureModal({setModal}) {
    const { setCartItems, cartItems } = useContext(cartContext);
    const navigate = useNavigate();
    function modalClose() {
        setCartItems({}); 
        setModal(false);
        navigate('/'); 
    }

    let billAmount = 0;
    for (const item of Object.values(cartItems)) {
        billAmount += item.price * item.quantity;
    }

    return (
        <Modal>
            <button style = {btn} onClick={modalClose} >X</button>
            <p style = {p}>Thank you for your purchase of Rs.{billAmount} </p>
        </Modal>
    );
}