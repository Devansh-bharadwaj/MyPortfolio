import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ProductReducer';

const AppContext = createContext();

const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    singleProduct: {},
    isSingleLoading: true,
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
        const res = await axios.get(url); 
        const products = await res.data;
        // console.log(products);
        dispatch({ type: "MY_API_DATA", payload: products });
        }
        catch (error) {
            dispatch({type: "API_ERROR"});
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"});
        try {
        const res = await axios.get(url);
        // console.log(res, url)
        const singleProduct = await res.data;
        dispatch({ type: "MY_SINGLE_PRODUCT", payload: singleProduct });
        }
        catch (error) {
            dispatch({type: "SINGLE_ERROR"});
        }
    }

    

    useEffect(() => {
        getProducts(API);
        // getSingleProduct(API);
    }, [])

    return <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
}


// custom hook
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };