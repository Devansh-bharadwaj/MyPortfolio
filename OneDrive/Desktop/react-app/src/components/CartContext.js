import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartItems");
    // if(localCartData === []){
    //     return []
    // }else {
    //     return JSON.parse(localCartData);
    // }
    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
}
const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, amount, myColor, product ) => {
        dispatch({ type: "ADD_TO_CART", payload: {id, amount, myColor, product}});
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id})
    }

    const removeCartItems = () => {
        dispatch({ type: "CLEAR_CART"})
    }

    useEffect(() => {
        dispatch({type: "CART_TOTAL_ITEM"})
        dispatch({type: "CART_TOTAL_AMOUNT"})
        localStorage.setItem("cartItems", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, removeCartItems}}>
        {children}
    </CartContext.Provider>

};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };