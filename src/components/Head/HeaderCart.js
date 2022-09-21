import classes from "./HeaderCart.module.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from "react-redux"

const HeaderCart = (props) => {
  
  const reduxData=useSelector(state=>state.items)

  const numberofcardCtx=reduxData.reduce((curnumber,item)=>{
    return curnumber+item.amount
   },0)

  return (
    <>
      <button className={classes.button} onClick={props.showCart}>
        <span className={classes.icon}>
          <AiOutlineShoppingCart size="23"/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofcardCtx}</span>
      </button>
    </>
  );
};
export default HeaderCart;
