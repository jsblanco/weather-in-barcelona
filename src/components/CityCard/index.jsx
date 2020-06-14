import React from "react";
import { EuiFlexItem, EuiCard, EuiBadge, EuiText } from "@elastic/eui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerEmpty,
  faThermometerFull,
  faCloudRain,
  faCloudSun,
  faCloud,
  faCloudSunRain,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import RainForecast from "./../RainForecast";

export default ({ city }) => {
  let date = new Date(city.fecha);
  let weatherIcon;
  let stateSky = city.stateSky.description;
  let forecast = city.pronostico.hoy;

  switch (true) {
    case stateSky.indexOf("escasa") > -1:
      weatherIcon = faCloudSunRain;
      break;
    case stateSky.indexOf("lluvia") > -1:
      weatherIcon = faCloudRain;
      break;
    case stateSky.indexOf("ubiert") > -1:
      weatherIcon = faCloud;
      break;
    case stateSky.indexOf("ubos") > -1:
      weatherIcon = faCloudSun;
      break;
    default:
      weatherIcon = faSun;
      break;
  }

  return (
    <EuiFlexItem
      style={{
        width: "500px",
        display: "inline-block",
      }}
    >
      <EuiCard
        textAlign="center"
        style={{
          margin: "20px",
        }}
        betaBadgeLabel={`El tiempo en ${city.municipio.NOMBRE}`}
        icon={<FontAwesomeIcon icon={weatherIcon} size="5x" />}
        title={`${stateSky}`}
        description={`Datos metereológicos del ${date.toLocaleString("es-es", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })} `}
      >
        <EuiText textAlign="center">
          <div className="align-center">
            <p className="d-inline" style={{ marginBottom: "0px" }}>
              Temperatura actual:
            </p>
            <h1
              className="d-inline"
              style={{ margin: "0px", marginLeft: "10px" }}
            >
              {city.temperatura_actual}º
            </h1>
          </div>
          <p>
            <FontAwesomeIcon icon={faThermometerEmpty} />
            <EuiBadge color="primary">
              <b>Mínima: </b>
              {city.temperaturas.min}
            </EuiBadge>
            {"   "}
            <FontAwesomeIcon icon={faThermometerFull} />
            <EuiBadge color="accent">
              <b>Máxima: </b>
              {city.temperaturas.max}
            </EuiBadge>
          </p>

          <h3>Probabilidad de precipitación:</h3>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>Mañana: {forecast.prob_precipitacion[1]}%</li>

            <RainForecast rainProbability={forecast.prob_precipitacion[1]} />
            <li>Tarde: {forecast.prob_precipitacion[2]}%</li>
            <RainForecast rainProbability={forecast.prob_precipitacion[2]} />
            <li>Noche: {forecast.prob_precipitacion[3]}%</li>
            <RainForecast rainProbability={forecast.prob_precipitacion[3]} />
          </ul>
        </EuiText>
      </EuiCard>
    </EuiFlexItem>
  );
};
