import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo{
    id: number;
    text: string;
    completed: boolean; // Add completed property
  createdAt: Date | null; // Add createdAt to individual Todo

}

interface TodoState{
    todos: Todo[],

}
const initialState:TodoState = {
    todos: [],
}
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state: TodoState, action: PayloadAction<Todo>)=>{
            const newTodo =  action.payload;
            state.todos.push(newTodo)
        },
        deleteTodo: (state: TodoState, action: PayloadAction<number>) =>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        markAsCompleted: (state: TodoState, action: PayloadAction<number>) =>{

            const todo = state.todos.find((t)=> t.id === action.payload);
            if(todo){
                todo.completed = !todo.completed
            }
          
        }
    }
})


export const {addTodo, deleteTodo, markAsCompleted} = todoSlice.actions;
export default todoSlice.reducer;