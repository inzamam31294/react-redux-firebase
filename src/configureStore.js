import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth, verifySignUp } from "./actions/";
import rootReducer from "./reducers";


export default function configureStore(persistedState) {
    const store = createStore(
      rootReducer,
      persistedState,
      compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
      )
    );
    store.dispatch(verifyAuth(), verifySignUp());
    return store;
  }