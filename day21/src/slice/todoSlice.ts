import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo{
    id: number;
    text: string;
    completed: boolean;
    createdAt: null| Date
}

interface TodoState{
    todos: Todo[]
}

const initialState : TodoState = {todos: []}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state: TodoState, action:PayloadAction <Todo> )=>{
            const newTodo = action.payload;
           state.todos.push(newTodo)
        },
        editTodo: (state: TodoState, action:PayloadAction<{id:number; text: string}>) =>{
            const todo = state.todos.find((t)=> t.id === action.payload.id);
            if(todo){
               todo.text = action.payload.text;
            }
            
        },
        deleteTodo: (state: TodoState, action: PayloadAction<number>) =>{
            state.todos = state.todos.filter((t)=> t.id !== action.payload)
        },
        toggleTodo: (state:TodoState, action:PayloadAction<number>)=>{
            const todo = state.todos.find((t)=> t.id === action.payload);
            if(todo){
                todo.completed = !todo.completed
            }
        },
        clearCompletedTodo: (state: TodoState) =>{
            state.todos = state.todos.filter((todo) => !todo.completed)
        }
    }
})

export  const {addTodo, editTodo, deleteTodo,toggleTodo, clearCompletedTodo} = todoSlice.actions;
export default todoSlice.reducer