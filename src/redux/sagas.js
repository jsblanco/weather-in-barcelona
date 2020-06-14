import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./constants";
import * as api from "../api/server-calls";
import * as actions from "./actions";

function* getCities(payload) {
  try {
    yield call(actions.getCitiesRequest);
    const cities = yield call(api.getCities, payload);
    yield put(actions.getCitiesSuccess(cities));
  } catch (error) {
    console.error(error);
    yield put(actions.getCitiesFail(error));
  }
}

function* citiesSaga() {
  yield takeLatest(constants.GET_CITIES_REQUEST, getCities);
}
export default citiesSaga;
