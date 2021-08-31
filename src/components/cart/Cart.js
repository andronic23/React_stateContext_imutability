import { useState, createContext, useContext } from "react"

// DEPENDENCIES - decoupling
// state SHARING management
// 1. LIFT UP THE STATE - HOC -> HIGHER ORDER COMPONENT
// 2. useContext() / Context API
// 3. Redux, Recoil, Redux 

//context API =>
//1. create context -> {Provider, Consumer} 
//2. vDOM <Provider value={...}>{children}</Provider>



const CartContext = createContext()

//1. + context
//2. + cart
//3. + state 
const CartContextWrapper = ({children, cart}) =>
{
    const [cart_, setCart] = useState(cart)
    return(
        <>
        <CartContext.Provider value={{cart:cart_, setCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}

const Cart = () =>{
    const {cart} = useContext(CartContext)
    return (

            <button>cart ({ cart.items.length })</button>
    )
}

const AddToCartButton = () =>{
    let {cart,setCart} = useContext(CartContext)
    return (
            <button onClick={() => {
                //imutability
                cart = cart.add({id:1, qty:2})
                setCart(cart)
                console.log(cart)
            }}
            >Add To Cart</button>
    )
}

// HIGHER ORDER COMPONENT
// DRILL DOWN PROPS
// const HOC = (props) =>{
//     let [count, setCount] = useState(props.count)

//     return (
//         <>
//             <Cart count={count}/>
//             <AddToCartButton  count={count} setCount ={setCount}/>
//         </>
//     )
// }

export {Cart, AddToCartButton, CartContext, CartContextWrapper}