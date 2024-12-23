import React, { useReducer, useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type State = Todo[];

type Action =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "toggleCompleted"; payload: number }
  | { type: "clear" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "clear":
      return [];
    case "toggleCompleted":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: "add", payload: text });
      setText("");
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button
                onClick={() =>
                  dispatch({ type: "toggleCompleted", payload: todo.id })
                }
              >
                {todo.completed ? "Undo" : "Completed"}
              
              </button>
              <button
                onClick={() => dispatch({ type: "remove", payload: todo.id })}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => dispatch({ type: "clear" })}>Clear All</button>
    </div>
  );
};

export default TodoApp;
