import VegeForm from "./VegeForm";
import classes from "./VegeItem.module.css";
import { useDispatch } from "react-redux"

const VegeItem = (props) => {
   
   const dispatch=useDispatch()

      const additem=(amount)=>{
        dispatch({
          type: 'add',
          item: {
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
          }
          })
      }

  return (
    <>
        <div className={classes.container} key={props.id}>
          <div className={classes["image-container"]}>
            <img src={props.img} alt="this is vegetable"/>
          </div>
          <h3 >{props.name}</h3>
          <div> MRP {props.price} Rs Per Kg</div>
          <VegeForm onAddItem={additem}/>
        </div>
    </>
  );
};
export default VegeItem;
