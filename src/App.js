import ProductModel from "./models/Product"
import Product from "./components/product/Product"
import CartModel from "./models/Cart"
import {Cart, AddToCartButton, CartContext, CartContextWrapper} from "./components/cart/Cart"
import { useState } from "react"
//import { Header, Footer, ContactPhoneContext, ContactEmailContext } from "./components/ContextComponent"




function App(props) {


    const products = [
      new ProductModel(1,"BMV", "https://live.staticflickr.com/4009/4611639006_27372e2401_b.jpg"),
    ]

   const cart = new CartModel(1)

 
   
    return (
      <div className="App">

      <div>
      {/* <Cart count={count}/>
      <AddToCartButton  count={count} setCount ={setCount}/> */}

      <CartContextWrapper cart={cart}>
        <div>
           <Cart />
        </div>       
        <AddToCartButton />
      </CartContextWrapper>

      {/* <ContactPhoneContext.Provider value="+373 568 458">
        <Header/>
      </ContactPhoneContext.Provider> */}

      <section>
      This is a content
      </section>

      {/* <ContactEmailContext.Provider  value="+info@company.example">
      <Footer />
      </ContactEmailContext.Provider> */}

      </div>
      <hr/>

        { products.map(product=>
          <div>
            <Product product={product} />
          </div>
        )}
       
      
      </div>
    )
}

export default App;
