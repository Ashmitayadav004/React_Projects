import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
const TodoItems = ({  onDeleteClick }) => {

//  const contextObj = useContext(TodoItemsContext);
//  const todoItems = contextObj.todoItems;

 const {todoItems,deleteItem} = useContext(TodoItemsContext);
  return (
    <div className="items-container text-center">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
