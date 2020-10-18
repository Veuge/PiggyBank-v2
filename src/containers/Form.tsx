import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity
} from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";

import { getExpenseTypeThunk } from "../store/actions/expenseTypeAction";
import { IAccount, ACCOUNTS_ADD_ACCOUNT } from "../store/reducers/accountsReducer";

interface IProps {
  doGetExpenseTypes: () => void
}

interface IFormStyle {
  mainContainer: ViewStyle;
  horizontalRule: ViewStyle;
  screenTitle: TextStyle;
}

const Form: React.FunctionComponent<IProps> = (props) => {
  const accounts = useSelector(state => state.accounts.accountList);
  const dispatch = useDispatch();

  useEffect(() => {
    props.doGetExpenseTypes()
  }, []);

  const onAddAccount = () => {
    console.log("Form::onAddAccount");
    const newAccount: IAccount = {
      name: "Bisa BOB",
      balance: 101.55,
      currency: "USD"
    };
    dispatch({ type: ACCOUNTS_ADD_ACCOUNT, newAccount });
  }

  const onAddExpense = () => {
    console.log("Add Expense");
  }

  const renderAddAccountButton = () => {
    const buttonStyle = {
      backgroundColor: "#27ae60",
      borderRadius: 6,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      padding: 10,
      marginHorizontal: 4
    };

    const buttonTextStyle = {
      color: "#ecf0f1",
      fontWeight: "bold"
    };

    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={buttonStyle} onPress={onAddAccount}>
          <Text style={buttonTextStyle}>Add new account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle} onPress={onAddExpense}>
          <Text style={buttonTextStyle}>Add new expense</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={FormStyle.mainContainer}>
        { renderAddAccountButton() }
        {accounts.map((a, i) => (
          <View
            style={{ borderBottomColor: "#bdc3c7", borderBottomWidth: StyleSheet.hairlineWidth, padding: 12 }}
            key={`${a.name}-${i}`}
          >
            <Text>Name: {a.name}</Text>
            <Text>Balance: {a.balance}</Text>
            <Text>Currency: {a.currency}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const FormStyle = StyleSheet.create<IFormStyle>({
  mainContainer: {
    padding: 10
  },
  horizontalRule: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  screenTitle: {
    textAlign: "center"
  }
});

export default connect(null, dispatch => ({
  doGetExpenseTypes: () => dispatch(getExpenseTypeThunk())
}))(Form);
