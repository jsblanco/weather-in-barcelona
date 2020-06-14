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

function* getCityWeather(payload) {
  try {
    yield call(actions.getWeatherRequest);
    const weather = yield call(api.getCityWeather, payload.payload.id);
    yield put(actions.getWeatherSuccess(weather));
  } catch (error) {
    console.error(error);
    yield put(actions.getWeatherFail(error));
  }
}

function* citiesSaga() {
  yield takeLatest(constants.GET_CITIES_REQUEST, getCities);
  yield takeLatest(constants.GET_CITY_WEATHER_REQUEST, getCityWeather);
}
export default citiesSaga;
