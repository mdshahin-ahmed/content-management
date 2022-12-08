import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import cartCounter from "./middleWares/cartCounter";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
// import logger from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
