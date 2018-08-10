import {createStore} from "redux";
import reducer from "./reducer"
let store = createStore(reducer);

window.store = store;
export default store;