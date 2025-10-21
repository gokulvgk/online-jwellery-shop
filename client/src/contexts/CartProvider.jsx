import {createContext, useState} from "react";
export const cartContext = createContext()
export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState({});
    const deleteCartItem = (name) => {
        setCartItems(prev => {const afterDelete = {...prev}
            delete afterDelete[name];
            return afterDelete;
        });}
    return (
        <cartContext.Provider value={{cartItems,setCartItems, deleteCartItem}}>
            {children}  
        </cartContext.Provider>
    );
}
