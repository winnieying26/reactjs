import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { addTodo, deleteTodo,markAsCompleted } from "../slice/todoSlice";

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState("");
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (todo.trim() === "") return;
    const newTodo = {
        id: Date.now(), text: "Learn Redux Toolkit", completed: false, createdAt: new Date()
    };
    dispatch(addTodo(newTodo));
    setTodo("");
  };
  const handleDelete =(id: number) =>{
    dispatch(deleteTodo(id))
  }

const handleMarkAsCompleted = (id: number)=>{
     dispatch(markAsCompleted(id))
}

  return (
    <div>
      <div>
        <h1>Todo App</h1>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      <div>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <p>{todo.text}</p> 
                <button onClick= {()=>handleMarkAsCompleted(todo.id)}> Mark as Completed </button>
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div> 
    </div>
  );
};

export default TodoList;
