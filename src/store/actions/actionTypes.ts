import { IExpenseType, IRequestError } from "../../api/";

export const EXPENSE_TYPE_GET_ALL_START   = "EXPENSE_TYPE_GET_ALL_START";
export const EXPENSE_TYPE_GET_ALL_SUCCESS = "EXPENSE_TYPE_GET_ALL_SUCCESS";
export const EXPENSE_TYPE_GET_ALL_FAILURE = "EXPENSE_TYPE_GET_ALL_FAILURE";

interface IGetAllExpenseTypeStartAction {
  type: typeof EXPENSE_TYPE_GET_ALL_START;
}

interface IGetAllExpenseTypeSuccessAction {
  type: typeof EXPENSE_TYPE_GET_ALL_SUCCESS,
  data: IExpenseType[]
}

interface IGetAllExpenseTypeFailureAction {
  type: typeof EXPENSE_TYPE_GET_ALL_FAILURE,
  error: IRequestError
}

export type IExpenseTypes = 
  IGetAllExpenseTypeStartAction 
  | IGetAllExpenseTypeSuccessAction
  | IGetAllExpenseTypeFailureAction