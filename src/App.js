import React from "react";
import { Provider } from "react-redux";
import Landing from "./components/Routing/Landing";
import { configStore } from "./state/store/configStore";

function App() {
  const myStore = configStore();
  return (
    <React.Fragment>
      <Provider store={myStore}>
        <Landing />
      </Provider>
    </React.Fragment>
  );
}

export default App;
