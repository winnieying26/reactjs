
//ACTION TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//ACYION CREATOR

export const increment = ()=>({type: INCREMENT});
export const decrement =()=>({type: DECREMENT});
export const reset =()=>({type: RESET});

//reducer

const counterReducer = (state={count:0}, action: {type: string}) =>{
    switch(action.type){
        case INCREMENT:
            return {...state, count: state.count+1};
        case DECREMENT:
            return {...state, count: state.count-1};
        case RESET:
            return {count :0}
        default:
            return state
    }
}

