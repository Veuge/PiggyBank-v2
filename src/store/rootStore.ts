import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const composeEnhancers = __DEV__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const rootStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default rootStore;
