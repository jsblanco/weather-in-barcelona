import React, { useEffect, useState, useCallback } from "react";
import { EuiFlexItem, EuiCard } from "@elastic/eui";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";

export default function CityCard({city}) {
  const dispatch = useDispatch();
  const { weatherData } = useSelector((State) => State);
  const [weather, setWeather] = useState(false)

useEffect(() => {
    dispatch(actions.getWeatherRequest(city))
}, [])



    return (
        <EuiFlexItem>
        <EuiCard
          title={`El tiempo en ${city.label}`}
          description={`Example of a card's description. Stick to one or two sentences. ${!!weather && "We got data!"} `}
          //onClick={() => window.alert('Card clicked')}
        />
      </EuiFlexItem>
    )
}
