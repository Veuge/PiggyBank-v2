import axios from "../axios-config";

const PATH = "expense_type.json";

interface IExpenseType {
  id: string;
  name: string;
}

const getExpenseTypeWs = () => axios.get(PATH);

export {
  IExpenseType,
  getExpenseTypeWs
};