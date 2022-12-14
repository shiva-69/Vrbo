import { createStore , combineReducers } from "redux"
import authReducer from "./auth/authReducer";
import searchReducer from "./search/searchReducer"

let rootReducer = combineReducers({
    auth : authReducer,
    search : searchReducer,
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;