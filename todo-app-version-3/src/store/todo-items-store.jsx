import { Children } from "react";
import { createContext } from "react";
import { useReducer } from "react";


export const TodoItemsContext = createContext([
  TodoItems=[],
  addNewItems:()=>{},
  deleteItem:()=>{},
]);

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "New_Item") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "Delete_Item") {
    const newTodoItems = currtodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }

  return [];
};

const TodoItemsContextProvider = ({ Children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (itemName, itemDueDate) => {
    //

    const newItemAction = {
      type: "New_Item",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "Delete_Item",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {Children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
