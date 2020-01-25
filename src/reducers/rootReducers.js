import reducersCompt from "./compt.reducers";
import { combineReducers } from "redux";
import { reducer as reducerFormReducer } from "redux-form";

export default combineReducers({
  reducersCompt,
  form: reducerFormReducer
});
