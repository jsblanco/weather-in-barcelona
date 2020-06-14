import React, { useEffect, useState, useCallback } from "react";
import { EuiComboBox } from "@elastic/eui";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";

export default function SearchBox() {
  const dispatch = useDispatch();
  const { cities, selectedCities } = useSelector((State) => State);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setOptions(cities);
  }, [cities]);

  const onChange = (e) => {
    setOptions(cities.filter((city) => city !== e));
    if (e.length > selectedCities.length) {
      dispatch(actions.selectCity(e[e.length - 1]));
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


  return (
    <EuiComboBox
      fullWidth={true}
      placeholder="Selecciona el municipio de interés"
      async
      options={options}
      selectedOptions={selectedCities}
      onChange={onChange}
      // onSearch={onSearchChange}
    />
  );
}