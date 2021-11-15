import '../css/ListItem.css';
import { FaTrashAlt } from 'react-icons/fa';
import { useRef, useState } from 'react';




function ListItem(props) {
const checkRef = useRef(); 
const [itemState , setItem] = useState({myStyle:{},isCheked:false});


  const text = props.text
  const deteAndTime = props.time

    function handleDelete(e){
      props.deleteFromList(props.id);


    }

    function handleClickDone(){
      checkRef.current.checked = (checkRef.current.checked)?false:true;
      handleCheckDone();
    }

    function handleCheckDone(){
      //לתקן
      if (checkRef.current.checked) setItem(pre =>{
        return{
          ...pre,
          myStyle:{"textDecoration":"line-through","backgroundColor":"rgba(216, 132, 118,0.5)"},isCheked:true
        }   
      })
      else setItem(pre =>{
        return{
          ...pre,
          myStyle:{"textDecoration":"initial"},isCheked:false
        }   
      }) 
    }



    return (
      <div className="listItem-container" style={itemState.myStyle} >
        <div className="listItem-firstRow">
          <div><input  type="checkbox" onChange={handleCheckDone} ref={checkRef}/></div>
          <div><p>{deteAndTime}</p></div>
          <div><button className="listItem-trashBtn" onClick={handleDelete}><FaTrashAlt /></button></div>
        </div>

        <div className="listItem-secondRow" onClick={handleClickDone}>
        <div  >{text}</div>
        </div>
      </div>
    

    );
  }
  
  export default ListItem;
