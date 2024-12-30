import { legacy_createStore as createStore , applyMiddleware, combineReducers} from "redux"
import thunk, {ThunkMiddleware} from "redux-thunk"
import {dataReducer} from "../features/reducers/reducer"
import {DataActionTypes} from "../features/types/actionTypes"

const rootReducer = combineReducers({
    data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<RootState, DataActionTypes>)
);

export default store;