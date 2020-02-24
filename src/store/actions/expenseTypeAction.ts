import * as actionTypes from "./actionTypes";
import { getExpenseTypeWs, IExpenseType, IRequestError } from "../../api/index";

export const expenseTypeStartAction = (): actionTypes.IExpenseTypes => ({
  type: actionTypes.EXPENSE_TYPE_ACTION_START
});

export const expenseTypeFailureAction = 
  (error: IRequestError): actionTypes.IExpenseTypes => ({
    type: actionTypes.EXPENSE_TYPE_ACTION_FAILURE,
    error
  });

export const getAllExpenseTypeSuccessAction = 
  (data: IExpenseType[]): actionTypes.IExpenseTypes => ({
    type: actionTypes.EXPENSE_TYPE_GET_ALL_SUCCESS,
    data
  });

export const getExpenseTypeThunk = () => {
  return dispatch => {
    dispatch(expenseTypeStartAction());
    getExpenseTypeWs()
      .then(r => {
        const expenseTypes: IExpenseType[] = Object.keys(r.data).map(key => ({
          id: key,
          name: r.data[key].name
        }));

        dispatch(getAllExpenseTypeSuccessAction(expenseTypes));
      })
      .catch(e => {
        dispatch(expenseTypeFailureAction(e));
      });
  }
};