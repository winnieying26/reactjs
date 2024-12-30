import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
     FETCH_DATA_FAILURE,
      DataActionTypes} from "../types/actionTypes"

interface DataState {
    loading: boolean;
    data: any[];
    error: null | string
}


const initialState: DataState = {
    loading: false,
    data: [],
    error: null
}

export const dataReducer = (state = initialState, action: DataActionTypes): DataState =>{
    switch(action.type){
        case FETCH_DATA_REQUEST:
          return {...state, loading: true, error: null};
        case FETCH_DATA_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case FETCH_DATA_FAILURE:
            return {...state, loading: false, error : action.payload}
        default:
            return state;
    }

}