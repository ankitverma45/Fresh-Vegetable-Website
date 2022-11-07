import Classes from "./MobileForm.module.css"

const MobileForm = (props) => {
   const addtoCart=(event)=>{
    event.preventDefault()
    const numberenteredAmount=1;
    props.onAddItem(numberenteredAmount)
   }
    return (
      <>
        <form className={Classes.form} onSubmit={addtoCart} >
        <button className={Classes.formbutton} type="submit">Add</button>
        </form>
      </>
    );
  };
  export default MobileForm;