import '../css/InsertItems.css';
import React from 'react';
import { useState } from 'react/cjs/react.development';


function InsertItems({addTask}) {
const [task, setTask] = useState({content:""})

function changeHandler(event){
  const content = event.target.value
  setTask(prevValue =>{
    return{
      ...prevValue,
      content
    }
  })
}

function clickHandler(){
  addTask(task);
  setTask({content:""});
}

return(
<div className="insertItem-container">
<div><input onChange={changeHandler} name="content" value={task.content} type="text" placeholder="Add new task"></input></div>
<div><button onClick={clickHandler}>Add</button></div>
</div>
);

  }
  
  export default InsertItems;
