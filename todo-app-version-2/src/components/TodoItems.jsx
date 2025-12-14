import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container text-center">
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}

      {/* <TodoItem todoDate="4/10/2023" todoName="Go To College"></TodoItem> */}
    </div>
  );
};
export default TodoItems;
