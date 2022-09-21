import classes from './Chackout.module.css';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';


const IsEmpty=value=>value.trim() === "";
const IsPinCode=value=>value.trim().length === 6;
const Chackout = (props) => {

    const dispatch=useDispatch()

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        pincode: true,
      });
  
    const enterName=useRef()
    const enterStreet=useRef()
    const enterCity=useRef()
    const enterPincode=useRef()
    

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = enterName.current.value;
    const enteredStreet = enterStreet.current.value;
    const enteredPincode = enterPincode.current.value;
    const enteredCity = enterCity.current.value;

    const enteredNameIsValid=!IsEmpty(enteredName)
    const enteredStreetIsValid=!IsEmpty(enteredStreet)
    const enteredCityIsValid=!IsEmpty(enteredCity)
    const enteredPincodeIsValid=IsPinCode(enteredPincode)

    const formIsValid=enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredCityIsValid &&
    enteredPincodeIsValid

    setFormInputsValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        pincode: enteredPincodeIsValid,
      });

     if(!formIsValid){
        return ;
     }
 
     dispatch({type:"remove"})
   

  };
  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.pincode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={enterName} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={enterStreet} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Pin Code</label>
        <input type='text' id='postal' ref={enterPincode} />
        {!formInputsValidity.pincode && (
          <p>Please enter a valid pin code (6 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={enterCity} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Chackout;