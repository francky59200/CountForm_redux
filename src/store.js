import { createStore } from "redux";

import rootReducers from "./reducers/rootReducers";

export default function comptStore() {
  return createStore(rootReducers);
}
