import AddTOdo from "./components/AddTOdo";
import AppName from "./components/AppName";
// import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go To College",
  //     dueDate: "4/10/2023",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`new item added : ${itemName} Date : ${itemDueDate}`);

    // const newTodoItems = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // setTodoItems(newTodoItems);

    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted : ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTOdo onNewItem={handleNewItem}></AddTOdo>
      {todoItems.length == 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
      {/* <div class="items container text-center">
        <TodoItem todoDate="4/10/2023" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="4/10/2023" todoName="Go To College"></TodoItem>
      </div> */}
    </center>
  );
}

export default App;
