import '../css/ListItem.css';
import { FaTrashAlt } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';


function ListItem(props) {
const checkRef = useRef(); 
const [itemState , lineItem] = useState();


  const text = props.text

    function handleDelete(e){
      console.log("click");

    }

    function handleClickDone(){
      checkRef.current.checked = (checkRef.current.checked)?false:true;
      handleCheckDone();
    }

    function handleCheckDone(){
      if (checkRef.current.checked) lineItem({"text-decoration":"line-through"})
      else lineItem({"text-decoration":"initial"}) 
    }

    return (
      <div className="listItem-container" style={itemState}>
        <div><input  type="checkbox" onChange={handleCheckDone} ref={checkRef}/></div>
        <div className="listItem-leftSection" onClick={handleClickDone} >{text}</div>
        <div className="listItem-rightSection"><button className="listItem-trashBtn" onClick={handleDelete}><FaTrashAlt /></button></div>

      </div>
    );
  }
  
  export default ListItem;
