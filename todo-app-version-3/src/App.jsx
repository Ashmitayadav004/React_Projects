import AddTOdo from "./components/AddTOdo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import { useReducer } from "react";


function App() {
  // const [todoItems, setTodoItems] = useState([]);
 
  return (
    <TodoItemsContext.Provider
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTOdo></AddTOdo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
