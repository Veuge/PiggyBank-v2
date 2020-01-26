import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from "react-native";

interface IFormStyle {
  mainContainer: ViewStyle;
  horizontalRule: ViewStyle;
  screenTitle: TextStyle;
}

const Form: React.FunctionComponent<{

}> = ({}) => {
  return (
    <ScrollView>
      <View style={FormStyle.mainContainer}>
        <Text>Provide some financial information</Text>
        <View style={FormStyle.horizontalRule} />
        <Text>Base Salary</Text>
        <Text>Liquid Salary</Text>
        <Text>Another thing</Text>
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

export default Form;
