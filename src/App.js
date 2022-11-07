import Header from "./components/Head/Header";
import Mobile from "./components/Mobile/Mobile";
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
      <Mobile />
    </>
  )
}

export default App;
