export interface CartItem{
    id: string;
    name: string;
    price: number;
    quantity: number
}

export interface CartState{
    items: CartItem[];
    total: number;
}

export type CartAction =
|{type:"ADD_ITEM"; payload : CartItem}
|{type:"REMOVE_ITEM"; payload : string} // item id
|{type: "CLEAR_CART"};


export const cartReducer =(state: CartState, action: CartAction): CartState =>{

    switch(action.type){
        case "ADD_ITEM": {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
              return {
                ...state,
                items: state.items.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
                total: state.total + action.payload.price,
              };
            }
            return {
              ...state,
              items: [...state.items, { ...action.payload, quantity: 1 }],
              total: state.total + action.payload.price,
            };
          }
        case "REMOVE_ITEM":{
            const itemToRemove = state.items.find((item) => item.id === action.payload);
            if (!itemToRemove) return state;
      
            return {
              ...state,
              items: state.items.filter((item) => item.id !== action.payload),
              total: state.total - itemToRemove.price * itemToRemove.quantity,
            };
          }
            
            
        case "CLEAR_CART":
            return {
                items: [],
                total: 0
            }
        default:
            return state
    }

}
export const initialCartState: CartState ={
    items: [],
    total: 0
}