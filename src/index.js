import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import comptStore from "./store";
import Main from "./Page/Main";
import SubmitForm from "./Page/SubmitForm";

import "./styles.scss";

function App() {
  return (
    <Provider store={comptStore()}>
      <Main />
      <div className="formulaire">
        <SubmitForm />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
