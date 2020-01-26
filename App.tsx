import React from "react";
import { Provider } from "react-redux";

import store from "./store/rootStore";
import { Text } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <Text>Hello PiggyBank</Text>
    </Provider>
  );
};

export default App;
