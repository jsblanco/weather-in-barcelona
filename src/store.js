import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import citiesSaga from "./redux/sagas";
import reducers from "./redux/reducers";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

function* rootSaga() {
  yield all([citiesSaga()]);
}

sagaMiddleware.run(rootSaga);
