import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import rootStore from "./store/rootStore";
import Form from "./containers/Form";

const App = () => {
  return (
    <Provider store={rootStore}>
      <SafeAreaView>
        <Form />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
