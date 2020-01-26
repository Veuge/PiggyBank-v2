import { combineReducers } from "redux";

const initialState = {
  baseSalary: 0,
  liquidSalary: 0,
  
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

export default combineReducers({
  state: reducer
});
