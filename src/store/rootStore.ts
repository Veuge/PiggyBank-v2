import { createStore } from "redux";
import reducer from "./reducers/reducer";

const rootStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore;
