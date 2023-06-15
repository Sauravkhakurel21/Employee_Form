import { createStore } from "redux";
import empReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from "redux-devtools-extension";
import employeeSaga from "./saga";
import {applyMiddleware} from "redux" 

const sagaMiddleWare = createSagaMiddleware();
const store = applyMiddleware(sagaMiddleWare)(createStore)(
  empReducer
);

sagaMiddleWare.run(employeeSaga);

export default store;
