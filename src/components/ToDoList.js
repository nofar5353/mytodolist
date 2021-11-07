import '../css/ToDoList.css';
import ListItem from './ListItem';
import InsertItems from './InsertItems';
import React, { useRef, useState } from 'react';

function ToDoList() {
const [tasks, setTasks] = useState([])

console.log(tasks)

function addTask(task){
setTasks(preTasks => {
  return[...preTasks , task]
})
}

    return (
      <div className="toDoList-container">
        <div className="listHeader-section">
        <h1>TO DO</h1>
        </div>
        <div className="listItem-section">
            <ul>
              {tasks.map(task=>(
                <li><ListItem text={task.content}/></li>
              ))}

            </ul>
        </div>
        <div className="insertItem-section">
        <InsertItems addTask={addTask} />
        </div>
      </div>
    );
  }
  
  export default ToDoList;
