import classes from "./Header.module.css"
import HeaderCart from "./HeaderCart";
import { useState } from "react";

const Header = (props) => {
   const [IsShow,setIsShow]=useState(true)
  return (
    <>
      <header className={classes.header }>
        <h1>React</h1>
        <HeaderCart showCart={props.onShowCart} />
      </header>
      { IsShow && <div className={classes['main-image']}>
      </div>}
    </>
  );
};
export default Header;
