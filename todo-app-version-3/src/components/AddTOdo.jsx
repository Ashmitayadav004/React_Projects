import { useRef, useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

function AddTOdo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const noOfUpdates = useRef(0);
const {addNewItem} = useContext(TodoItemsContext);
  const todoNanmeElement = useRef();
  const todoDateElement = useRef();

  //use with useState
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current +=1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`no of dates are : ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event);

    event.preventDefault();
    const todoName=todoNanmeElement.current.value;
    const dueDate=todoDateElement.current.value;
    todoNanmeElement.current.value="";
    todoDateElement.current.value="";
    console.log(`${todoName} due on : ${dueDate}`);
    onNewItem(todoName, dueDate);

    // setDueDate("");
    // setTodoName("");
  };
  return (
    <form className="row" onSubmit={handleAddButtonClicked}>
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter Todo Here"
          // value={todoName}
          ref={todoNanmeElement}
          // onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          // value={dueDate}
          ref={todoDateElement}
          //  onChange={handleDateChange}
        ></input>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success">
          <MdAddToPhotos />
        </button>
      </div>
    </form>
  );
}
export default AddTOdo;
