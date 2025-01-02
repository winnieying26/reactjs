import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/index";
import { v4 as uuidv4} from 'uuid';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {id: uuidv4(), text, completed: false}
});

export const removeTodo =(id)=>({
  type: REMOVE_TODO,
  payload: id
})

export const toggleTodo = (id) =>({
  type: TOGGLE_TODO,
  payload:id
})