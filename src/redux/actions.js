import * as constants from "./constants";

export const getCitiesRequest = () => ({
  type: constants.GET_CITIES_REQUEST,
});

export const getCitiesSuccess = (payload) => ({
  type: constants.GET_CITIES_SUCCESS,
  payload,
});

export const getCitiesFail = (payload) => ({
  type: constants.GET_CITIES_FAIL,
  payload,
});

export const selectCity = (payload) => ({
  type: constants.SELECT_CITY,
  payload,
});

export const unselectCity = (payload) => ({
  type: constants.UNSELECT_CITY,
  payload,
});

export const getWeatherRequest = (payload) => ({
  type: constants.GET_CITY_WEATHER_REQUEST,
  payload,
});

export const getWeatherSuccess = (payload) => ({
  type: constants.GET_CITY_WEATHER_SUCCESS,
  payload,
});

export const getWeatherFail = (payload) => ({
  type: constants.GET_CITY_WEATHER_FAIL,
  payload,
});

