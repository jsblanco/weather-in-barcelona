import * as constants from "./constants";
const initialState = {
  cities: [],
  selectedCities: [],
  weatherData: [],
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
      return {
        ...state,
        cities: payload.municipios.map((city) => {
          let cityName = "";
          let apostrophe = city.NOMBRE.indexOf("&#39;");
          apostrophe === -1
            ? (cityName = city.NOMBRE)
            : (cityName =
                city.NOMBRE.substring(0, apostrophe) +
                "'" +
                city.NOMBRE.substring(apostrophe + 5));
          return {
            id: city.ID_REL.substring(1, 6),
            label: cityName,
          };
        }),
      };
    case constants.GET_CITIES_FAIL:
    case constants.GET_CITY_WEATHER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case constants.GET_CITY_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: [...state.weatherData, payload],
      };
    case constants.SELECT_CITY:
      return {
        ...state,
        selectedCities: [...state.selectedCities, payload],
      };
    case constants.UNSELECT_CITY:
      return {
        ...state,
        selectedCities: state.selectedCities.filter((city) => city !== payload),
        weatherData: state.weatherData.filter(city=>(city.municipio.ID_REL.substring(1,6)!==payload.id))
      };
    default:
      return state;
  }
};
