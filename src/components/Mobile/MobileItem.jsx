import MobileForm from "./MobileForm";
import "./MobileItem.css";
import { useDispatch } from "react-redux"

const MobileItem = (props) => {
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
    <div>
        <div className="container3">
          <div className="container-textsss">
            <h3 className="name">{props.name}</h3>
            <h3 className="name">{props.price} </h3>
          </div>
          <img src={props.img} alt="ankit" className="image-2"></img>
        </div>
       <MobileForm onAddItem={additem}/>
       </div>
    </>
  );
};
export default MobileItem;
