import {axiosInstance} from "./axiosInstance/axiosInstance";

  export const getCities = () => {
    return axiosInstance.get("")
  }

  export const getCityWeather = (cityId) => {
    return axiosInstance.get(`/${cityId.substring(1,5)}`)
  }
