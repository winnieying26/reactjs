import axios from "axios"
import { FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DataActionTypes } from "../types/actionTypes"

import { Dispatch } from "redux"

interface Post {
    id: number;
    title: string;
    body: string
}

export const fetchDataRequest = (): DataActionTypes=>({
    type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data: Post[]): DataActionTypes =>({
    type: FETCH_DATA_SUCCESS,
    payload: data,
})

export const fetchDataFailure = (error: string): DataActionTypes =>({
    type: FETCH_DATA_FAILURE,
    payload: error
})

export const fetchData =()=>{
    return async(dispatch: Dispatch<DataActionTypes>) =>{
        dispatch(fetchDataRequest());
        try{
            const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
            dispatch(fetchDataSuccess(response.data));
            }catch(error: any){
                dispatch(fetchDataFailure(error.message))

            }
    }
}


