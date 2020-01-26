import React from "react";
import { Provider } from "react-redux";

import rootStore from "./store/rootStore";
import Form from "./containers/Form";

const App = () => {
  return (
    <Provider store={rootStore}>
      <Form />
    </Provider>
  );
};

export default App;
