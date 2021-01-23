// Import the reducer and 'createStore' method.
import { createStore } from "redux";
import reducer from "./reducers";

// Create and export the Redux global store.
const store = createStore(reducer);
export default store;
