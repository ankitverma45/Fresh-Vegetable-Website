import Input from "../Order/Input";
import Classes from "./VegeForm.module.css"
import { useRef } from "react"


const VegeForm = (props) => {
   
  const amountInputRef=useRef()

   const addtoCart=(event)=>{
    
    event.preventDefault()
    const enteredAmount=amountInputRef.current.value;
    const numberenteredAmount=+enteredAmount;
    props.onAddItem(numberenteredAmount)
    
   }
    return (
      <>
        <form className={Classes.form} onSubmit={addtoCart} >
        <Input lable="Quantity"  input={{
            ref:amountInputRef,
            id: 'amount_' + props.id, 
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
        }}/>
        <button className={Classes.formbutton} type="submit">Add</button>
        </form>
      </>
    );
  };
  export default VegeForm;