import { legacy_createStore,combineReducers } from "redux";
import { reducer as AppReducer } from "./reducer";
import {reducer as AuthReducer} from "../AuthReducer/reducer"

const rootReducer = combineReducers({
    AppReducer,
    AuthReducer
})

export const store = legacy_createStore(rootReducer)