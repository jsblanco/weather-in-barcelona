import * as constants from "./constants";
const initialState = {
  cities: [],
  error: "",
  searchKeyword: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_CITIES_REQUEST:
      if (!!state.cities)
        return { ...state, cities: [], loading: true, error: "" };
      return {
        ...state,
        error: "",
        loading: true,
      };
    case constants.GET_CITIES_SUCCESS:
      let newList = payload;
      return {
        ...state,
        cities: newList,
      };
    case constants.GET_CITIES_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
