import React, { useEffect, useState, useCallback } from "react";
import { EuiFlexItem, EuiCard } from "@elastic/eui";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";

export default function CityCard({city}) {
  const dispatch = useDispatch();
  const { cities, selectedCities } = useSelector((State) => State);


    return (
        <EuiFlexItem>
        <EuiCard
          title={`El tiempo en ${city.label}`}
          description="Example of a card's description. Stick to one or two sentences."
          //onClick={() => window.alert('Card clicked')}
        />
      </EuiFlexItem>
    )
}
