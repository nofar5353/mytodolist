import '../css/InsertItems.css';
import React from 'react';
import { useState ,useRef } from 'react/cjs/react.development';
import moment from 'moment';



function InsertItems(props) {
const [task, setTask] = useState({content:""})
const inputRef = useRef(); 

function changeHandler(event){
  const content = event.target.value
  setTask(prevValue =>{
    return{
      ...prevValue,
      content
    }
  })
}

function onKeyUpHandler(event) {
  if(event.code === "Enter") clickHandler();
}

function clickHandler(){
  if(task.content === ""){
    inputRef.current.focus()
  }
  else{
    let date= moment().format("DD-MM-YYYY hh:mm");
    props.addTask(task.content,date);
    setTask({content:""});
  }
}


return(
<div className="insertItem-container">
<div><input ref={inputRef} onKeyPress={onKeyUpHandler} onChange={changeHandler} name="content" value={task.content} type="text" placeholder="Add new task"></input></div>
<div><button  onClick={clickHandler}>Add</button></div>
</div>
);

  }
  
  export default InsertItems;
