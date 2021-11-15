import '../css/ToDoList.css';
import ListItem from './ListItem';
import InsertItems from './InsertItems';
import React, {  useState } from 'react';
import { DragDropContext ,Droppable, Draggable  } from 'react-beautiful-dnd';


function ToDoList() {
const [tasks, setTasks] = useState([])
const [listItemID, setListItemID] = useState(2)


function addTask(task,date){
setListItemID(prev => prev+1)
setTasks(preTasks => {
  return[...preTasks , {content:task,id:listItemID,date:date}]
})
}

function deleteFromList(id){
  console.log(id)
  let newTasklist = tasks.filter((per) => per.id !== id);
  setTasks(newTasklist);
}

function handleOnDragEnd(result) {
     // dropped outside the list
     if (!result.destination) {
      return;
}
const items = Array.from(tasks);
const [reorderedItem] = items.splice(result.source.index, 1);
items.splice(result.destination.index, 0, reorderedItem);

setTasks(items);
}

return (
      <div className="toDoList-container">
        <div className="listHeader-section">
        <h1>TO DO</h1>
        </div>
        <div className="listItem-section">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable">
          {(provided) => (
          <ul className="characters" ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index)=> {
              return (
                <Draggable draggableId={task.id.toString()} key={task.id.toString()} index={index}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <ListItem key={task.id} text={task.content} time={task.date} id={task.id} deleteFromList={deleteFromList}/>
                  </li>
                )}
                </Draggable>
              )})
            }
          </ul>
                )}
                </Droppable>
          </DragDropContext>
        </div>
        <div className="insertItem-section">
        <InsertItems addTask={addTask} />
        </div>
      </div>
    );
  }
  
  export default ToDoList;
