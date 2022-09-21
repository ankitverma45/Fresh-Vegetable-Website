import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCart}></div>;
};
const Front = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.change}</div>
    </div>
  );
};

const overlay = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop hideCart={props.hideCart}/>, overlay)}
      {ReactDom.createPortal(<Front change={props.children}/>, overlay)}
    </>
  );
};
export default Modal;
