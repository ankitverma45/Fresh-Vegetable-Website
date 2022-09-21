import classes from "./HeaderInput.module.css"
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from "react-redux";

const HeaderInput=(props)=>{

  const dispatch=useDispatch()
  const filteritem=(event)=>{
    const value=event.target.value.toLowerCase()
    const query =value
    if(query===""){
      props.hide(true)
      dispatch({type:"filt",
      change:query
  })
    }else{
    dispatch({type:"filt",
      change:query
  })
  props.hide(false)
}
 }
    return (
        <>
          <div className={classes["select-search"]}>
          <input type="search" placeholder="Search" onChange={filteritem}></input>
          <div className={classes.search}>
            <AiOutlineSearch size="30" />
          </div>
        </div>
        </>
    )
}
export default HeaderInput