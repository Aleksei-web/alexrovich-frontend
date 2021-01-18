import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import initState from "../initialState";
import rootReducer from "../reducers/rootReduser";
import thunkMiddleware from "redux-thunk";

export default function configurateStore() {
  const middlewares = [thunkMiddleware];

  const store = createStore(rootReducer,initState(), applyMiddleware(...middlewares));

  return store;
}

// export  const store = createStore(
//   rootReducer,
//   initState(),
//   composeWithDevTools(applyMiddleware(thunk))
// )
