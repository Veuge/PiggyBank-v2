import { IExpenseType, IRequestError } from "../../api/";

export const EXPENSE_TYPE_ACTION_START = "EXPENSE_TYPE_ACTION_START";
export const EXPENSE_TYPE_ACTION_FAILURE = "EXPENSE_TYPE_ACTION_FAILURE";

export const EXPENSE_TYPE_GET_ALL_SUCCESS = "EXPENSE_TYPE_GET_ALL_SUCCESS";
export const EXPENSE_TYPE_ADD_NEW_SUCCESS = "EXPENSE_TYPE_ADD_NEW_SUCCESS";

interface IExpenseTypeStartAction {
  type: typeof EXPENSE_TYPE_ACTION_START;
}

interface IExpenseTypeFailureAction {
  type: typeof EXPENSE_TYPE_ACTION_FAILURE,
  error: IRequestError
}

interface IGetAllExpenseTypeSuccessAction {
  type: typeof EXPENSE_TYPE_GET_ALL_SUCCESS,
  data: IExpenseType[]
}

interface IAddExpenseTypeSuccessAction {
  type: typeof EXPENSE_TYPE_ADD_NEW_SUCCESS,
  data: IExpenseType
}

export type IExpenseTypes = 
  IExpenseTypeStartAction 
  | IExpenseTypeFailureAction
  | IGetAllExpenseTypeSuccessAction
  | IAddExpenseTypeSuccessAction