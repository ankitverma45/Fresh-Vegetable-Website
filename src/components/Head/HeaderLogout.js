import { useState } from "react"
import classes from "./HeaderLogout.module.css";
import Image from "../../Image/image.jpg";

const HeaderLogout = () => {
 
  const [showPro,setShowPro]=useState(false)

  const changeHandler=()=>{
    setShowPro(preValue=>!preValue)
  }
   
  return (
    <>
    <div className={classes.relate}>
    <button className={classes.button} onClick={changeHandler}>
      <div className={classes.imgcontainer}>
        <img src={Image} alt="Avatar" className={classes.avatar} />
      </div>
      </button>
      { showPro &&<div className={classes.profile}>
        <div classNam={classes.log}>Profile</div>
        <div classNam={classes.log}>LogOut</div>
      </div>}
      </div>
    </>
  );
};
export default HeaderLogout;
