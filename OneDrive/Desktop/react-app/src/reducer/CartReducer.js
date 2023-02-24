
const CartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let { id, myColor, product, amount } = action.payload;
        // console.log(myColor);
        let cartProduct;

        let existingProduct = state.cart.find((curElem) => {
            return curElem.id === id + myColor;
        })
        if(existingProduct){
            let updatedProduct = state.cart.map((curElem) => {
                if(curElem.id === id + myColor){
                    let newAmount = curElem.amount + amount;
                    return {
                        ...curElem,
                        amount: newAmount
                    }
                }else {
                    return curElem;
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }
        }else {
            cartProduct = {
                id: id + myColor,
                name: product.name,
                myColor,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        }
    }

    if(action.type === "REMOVE_ITEM"){
        let updatedProduct = state.cart.filter((curElem) => curElem.id !== action.payload);
        return {
            ...state,
            cart: updatedProduct
        }
    }

    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart: []
        }
    }
    if(action.type === "CART_TOTAL_ITEM"){
        let updatedItemValue = state.cart?.reduce((initialVal, curElem) => {
            let { amount } = curElem;

            initialVal = initialVal + amount;
            return initialVal;
        }, 0)
        return {
            ...state,
            total_item: updatedItemValue,
        }
    }

    if(action.type === "CART_TOTAL_AMOUNT"){
        let updatedPriceValue = state.cart?.reduce((initialVal, curElem) => {
            let { amount, price } = curElem;
            initialVal = initialVal + (price * amount);
            return initialVal;
        }, 0)
        return {
            ...state,
            total_amount: updatedPriceValue
        }
    }
  return state;
}

export default CartReducer