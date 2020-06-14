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

export const changeSelectedCities = (payload) => ({
  type: constants.CHANGE_SELECTED_CITIES,
  payload,
});

