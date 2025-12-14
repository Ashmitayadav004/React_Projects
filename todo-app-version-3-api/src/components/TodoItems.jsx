import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container text-center">
      {todoItems.map((item) => (
        <TodoItem
        key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}

      {/* <TodoItem todoDate="4/10/2023" todoName="Go To College"></TodoItem> */}
    </div>
  );
};
export default TodoItems;
