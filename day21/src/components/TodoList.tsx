import React, { useState } from "react";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  addTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
  clearCompletedTodo,
} from "../slice/todoSlice";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const TodoList: React.FC = () => {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState<number | null>(null); // Track the ID of the task being edited
  const [newText, setNewText] = useState(""); // Hold the updated text value for editing

  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  const progressPercentage =
    totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  // Add a new todo
  const handleAddTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date(),
    };
    dispatch(addTodo(newTodo));
    setInput("");
  };

  // Toggle edit mode or save the updated todo
  const handleEdit = (id: number) => {
    if (isEditing === id) {
      // Save changes
      dispatch(editTodo({ id, text: newText }));
      setIsEditing(null);
    } else {
      // Enter edit mode
      setIsEditing(id);
      const todoToEdit = todos.find((todo) => todo.id === id);
      if (todoToEdit) setNewText(todoToEdit.text); // Pre-fill input
    }
  };

  // Delete a todo
  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  // Remove all completed todos
  const handleClearCheckedTodos = () => {
    dispatch(clearCompletedTodo());
  };

  return (
    <div
      className="todos"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>TODOLIST</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", width: "80%", height: "40px" }}>
        <input
          type="text"
          placeholder="What needs to be done?"
          style={{
            width: "80%",
            padding: "5px",
            border: "1px solid rgb(25, 125, 187)",
            borderRadius: "4px",
            textAlign: "center",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          style={{
            width: "10%",
            padding: "5px 10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, width: "80%", height: "40px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" , height: "40px" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {isEditing === todo.id ? (
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  onBlur={() => handleEdit(todo.id)} // Save on blur
                  autoFocus
                  style={{
                    padding: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              )}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => handleEdit(todo.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: isEditing === todo.id ? "#28a745" : "#007bff",
                }}
              >
                {isEditing === todo.id ? "Save" : <MdEdit />}
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#dc3545",
                }}
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "40px",
          maxWidth: "500px",
          marginTop: "20px",
        }}
      >
        {/* Progress Bar */}
        <div
          style={{
            flex: "1",
            height: "40px",
            backgroundColor: "#e0e0e0",
            borderRadius: "2px",
            overflow: "hidden",
            position: "relative", // To allow text overlay
            marginRight: "10px",
          }}
        >
          <div
            style={{
              width: `${progressPercentage}%`,
              height: "100%",
              backgroundColor: "#4caf50",
              transition: "width 0.3s ease",
            }}
          ></div>

          {/* Text on Progress Bar */}
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "14px",
              fontWeight: "bold",
              color: progressPercentage > 50 ? "#fff" : "#000", // Adjust color based on contrast
            }}
          >
            {completedTodos} of {totalTodos} tasks completed
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleClearCheckedTodos}
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            height: "40px",
          }}
        >
          Remove Checked <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
