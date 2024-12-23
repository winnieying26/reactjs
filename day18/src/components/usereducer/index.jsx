// useReducer

import { useReducer } from "react"

//
// 
const [state, dispatch] = useReducer(reducer, initialState)

/* reducer: a function that determines the next state based on the current state and an action
initialState: the initial value of the state
state: the current state managed by the reducer
dispatch: a function to send actions to the reducer
*/


const reducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return {count: state.count + 1};
        case "decrement" :
            return {count: state.count -1}
        default:
            return state;
    }
}