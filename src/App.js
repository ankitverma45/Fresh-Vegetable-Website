import Header from "./components/Head/Header";
import Vegetable from "./components/Vegetable/Vegetable";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
   
   const [isShowCart,setIsShowCart]=useState(false)

  const HandlershowCart=()=>{
    setIsShowCart(true)
  }
  const handlerHideCart=()=>{
    setIsShowCart(false)
  }

  return (
    <>
       {isShowCart && <Cart hideCart={handlerHideCart}/>}
       <Header onShowCart={HandlershowCart}/>
      <Vegetable />
    </>
  )
}

export default App;
