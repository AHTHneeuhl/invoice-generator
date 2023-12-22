import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reduxStore from "redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
