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
setOptions(cities)
}, [cities])

  const onChange = (e) => {
    setOptions(cities.filter(city=>(city!==e)))
    dispatch(actions.changeSelectedCities(e));
  };


const onSearchChange = useCallback(
  (searchValue) => {
    setOptions([]);
    setOptions(
      cities.filter((city) =>
        city.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }
);




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


/*       let updatedCities = state.cities.filter(
        (city) => city !== payload[payload.length - 1]
      );
       */
