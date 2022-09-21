import VegeItem from "./VegeItem";
import classes from "./VegeAvailable.module.css";
import {  useSelector } from "react-redux";

const VegeAvailable = () => {
  const dataredux=useSelector(state=>state.filteredItems)
  const vegetableItem = dataredux.map((meal) => {
   return <VegeItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      img={meal.img}
      price={meal.price}
    />;
  });

  return (
    <div className={classes["major-container"]}>
      <ul>{vegetableItem}</ul>
    </div>
  );
};

export default VegeAvailable;
