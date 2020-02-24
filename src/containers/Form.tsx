import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { connect } from "react-redux";

import { getExpenseTypeThunk, addExpenseTypeThunk } from "../store/actions/expenseTypeAction";
import { IExpenseType } from "../api";

interface IProps {
  doGetExpenseTypes: () => void;
  doAddExpenseType: (newType: IExpenseType) => void;
}

interface IFormStyle {
  mainContainer: ViewStyle;
  horizontalRule: ViewStyle;
  screenTitle: TextStyle;
}

const Form: React.FunctionComponent<IProps> = (props) => {
  const [newExpenseType, setNewExpenseType] = useState("trufi");

  useEffect(() => {
    props.doGetExpenseTypes()
  }, []);

  const addNewExpenseType = () => {
    const et: IExpenseType = { name: newExpenseType }
    props.doAddExpenseType(et);
  }

  return (
    <ScrollView>
      <View style={FormStyle.mainContainer}>
        <Text>Provide some financial information</Text>
        <View style={FormStyle.horizontalRule} />
        <Text>Base Salary</Text>
        <Text>Liquid Salary</Text>
        <Text>Another thing</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 30,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={addNewExpenseType}
      >
        <Text>Add new expense type!</Text>
      </TouchableOpacity>
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
  doGetExpenseTypes: () => dispatch(getExpenseTypeThunk()),
  doAddExpenseType: newExpenseType => dispatch(addExpenseTypeThunk(newExpenseType))
}))(Form);
