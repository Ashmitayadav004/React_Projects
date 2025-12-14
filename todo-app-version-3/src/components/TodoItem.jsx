import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem1({ todoName, todoDate }) {
  
 const {deleteItem}  = useContext(TodoItemsContext);
  return (
    <div className="row">
      <div className="col-4">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(todoName)}>
         <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem1;
