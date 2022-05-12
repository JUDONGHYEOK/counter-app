import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";
import ReactRedux from "./Provider";

const store = createStore(reducer, composeWithDevTools());

const render = () => {
  ReactDOM.render(
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
