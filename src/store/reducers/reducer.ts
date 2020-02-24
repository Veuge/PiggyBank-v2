import { combineReducers } from "redux";
import expenseTypeReducer from "./expenseTypeReducer";

const initialState = {
  baseSalary: 0,
  liquidSalary: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export default combineReducers({
  init: reducer,
  expenseType: expenseTypeReducer
});
