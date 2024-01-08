import { ActionCreator, applyMiddleware, combineReducers, compose } from "redux";
import { store } from "..";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { thunk } from "redux-thunk";
import { searchReducer } from "./reducers";


export const rootReducer = combineReducers({
    searchReducer
});


const composeEnhancers = (window)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
export const enhancer = composeEnhancers(
    applyMiddleware(thunk))
