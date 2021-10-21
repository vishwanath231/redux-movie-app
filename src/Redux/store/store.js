import { createStore } from "redux";
import { reducer } from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";


// REDUX STORE
const store = createStore(
    reducer,
    {},
    composeWithDevTools()
)

export default store;