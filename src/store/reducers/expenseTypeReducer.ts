import * as actionTypes from "../actions/actionTypes";
import { IExpenseType, IRequestError } from "../../api/";

interface IExpenseTypeState {
  loading: boolean;
  expenseTypes: IExpenseType[];
  error: IRequestError;
};

const initialState: IExpenseTypeState = {
  loading: false,
  expenseTypes: [],
  error: null
};

export default reducer = (
  state = initialState,
  action: actionTypes.IExpenseTypes
): IExpenseTypeState => {
  switch(action.type) {
    case actionTypes.EXPENSE_TYPE_GET_ALL_START: {
      return {
        ...state,
        loading: true,
        what: "xxx"
      }
    }
    case actionTypes.EXPENSE_TYPE_GET_ALL_SUCCESS: {
      return {
        ...state,
        loading: false,
        expenseTypes: action.data
      }
    }
    case actionTypes.EXPENSE_TYPE_GET_ALL_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default: {
      return state;
    }
  }
};
