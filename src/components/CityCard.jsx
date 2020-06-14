import React, { useEffect, useState, useCallback } from "react";
import { EuiFlexItem, EuiCard } from "@elastic/eui";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";

export default function CityCard({city}) {

    return (
        <EuiFlexItem>
        <EuiCard
          title={`El tiempo en ${city.municipio.NOMBRE}`}
          description={` ${!!city && "We got data!"} `}
          //onClick={() => window.alert('Card clicked')}
        >
            <ul>Temperaturas:
            <li>
                <b>Mínima: </b>{city.temperaturas.min}
            </li>
            <li>
                <b>Máxima: </b>{city.temperaturas.max}
            </li>
            </ul>
        </EuiCard>
      </EuiFlexItem>
    )
}
