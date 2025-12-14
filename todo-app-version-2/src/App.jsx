import AddTOdo from "./components/AddTOdo";
import AppName from "./components/AppName";
// import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go To College",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTOdo></AddTOdo>
      <TodoItems todoItems={todoItems}></TodoItems>
      {/* <div class="items container text-center">
        <TodoItem todoDate="4/10/2023" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="4/10/2023" todoName="Go To College"></TodoItem>
      </div> */}
    </center>
  );
}

export default App;
