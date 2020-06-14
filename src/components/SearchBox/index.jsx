import React, { useEffect, useState } from "react";
import { EuiComboBox } from "@elastic/eui";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const { cities, selectedCities } = useSelector((State) => State);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(cities);
  }, [cities]);

  const onChange = (e) => {
    setOptions(cities.filter((city) => city !== e));
    if (e.length > selectedCities.length) {
      let selectedCity = e[e.length - 1];
      dispatch(actions.selectCity(selectedCity));
      dispatch(actions.getWeatherRequest(selectedCity));
    } else {
      let cityToRemove = {};
      selectedCities.forEach((city) => {
        if (e.indexOf(city) === -1) {
          cityToRemove = city;
        }
      });
      dispatch(actions.unselectCity(cityToRemove));
    }
  };

  const searchHandler = (query) => {
    let filteredOptions = cities.filter(
      (city) =>
        selectedCities.indexOf(city) === -1 &&
        city.label.toLowerCase().includes(query.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  return (
    <EuiComboBox
    style={{marginLeft:"5%", marginRight:"5%"}}
      fullWidth={true}
      placeholder="Selecciona el municipio de interés"
      async
      options={options}
      selectedOptions={selectedCities}
      onChange={onChange}
      onSearchChange={(e) => searchHandler(e)}
    />
  );
};
