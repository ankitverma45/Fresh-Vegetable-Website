import classes from "./Header.module.css"
import HeaderCart from "./HeaderCart";
import HeaderInput from "./HeaderInput";
import HeaderLogout from "./HeaderLogout";
import mealsImage from "../../Image/veget.webp";
import { useState } from "react";

const Header = (props) => {
   const [IsShow,setIsShow]=useState(true)
  return (
    <>
      <header className={classes.header }>
        <h1>Ankit</h1>
        <HeaderInput hide={setIsShow} show={IsShow}/>
        <HeaderCart showCart={props.onShowCart} />
        <HeaderLogout />
      </header>
      { IsShow && <div className={classes['main-image']}>
        <img src={mealsImage} alt='food!' />
      </div>}
    </>
  );
};
export default Header;
