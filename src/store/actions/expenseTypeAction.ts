import * as actionTypes from "./actionTypes";
import { getExpenseTypeWs, IExpenseType } from "../../api/index";

export const getAllExpenseTypeStartAction = (): actionTypes.IExpenseTypes => ({
  type: actionTypes.EXPENSE_TYPE_GET_ALL_START
});

export const getAllExpenseTypeSuccessAction = (data): actionTypes.IExpenseTypes => ({
  type: actionTypes.EXPENSE_TYPE_GET_ALL_SUCCESS,
  data
});

export const getAllExpenseTypeFailureAction = (error): actionTypes.IExpenseTypes => ({
  type: actionTypes.EXPENSE_TYPE_GET_ALL_FAILURE,
  error
});

export const getExpenseTypeThunk =() => {
  return dispatch => {
    dispatch(getAllExpenseTypeStartAction());
    getExpenseTypeWs()
      .then(r => {
        const expenseTypes: IExpenseType[] = Object.keys(r.data).map(key => ({
          id: key,
          name: r.data[key].name
        }));

        dispatch(getAllExpenseTypeSuccessAction(expenseTypes));
      })
      .catch(e => {
        dispatch(getAllExpenseTypeFailureAction(e));
      });
  }
};