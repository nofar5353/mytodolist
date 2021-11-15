import "./App.css";
import ToDoList from "./components/ToDoList";
import WebFont from "webfontloader";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Ubuntu"],
      },
    });
  }, []);

  return (
    <div className="main-container">
      <div className="toDoListContainer">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
