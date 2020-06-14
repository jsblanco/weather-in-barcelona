import React, { useEffect } from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from "@elastic/eui";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import SearchBox from "./components/SearchBox/";
import CityCard from "./components/CityCard/";

function App() {
  const dispatch = useDispatch();
  const { cities, weatherData } = useSelector((state) => state);

  useEffect(() => {
    if (cities.length===0) dispatch(actions.getCitiesRequest());
  }, []);

  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageHeader>
          <EuiPageHeaderSection style={{width:"100%", textAlign:"center", marginTop: "30px", fontWeight:"bold"}}>
            <EuiTitle size="l" >
              <h1>El tiempo en Barcelona</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentHeader>
            {cities.length>0
            ?<SearchBox/>
          :<p><i>Cargando los municipios...</i></p>}
          </EuiPageContentHeader>
          <EuiPageContentBody style={{display: "flex", justifyContent:"center", flexWrap: "wrap" }}>
  {weatherData.length>0
  ? weatherData.map(city=>{return <CityCard key={city.municipio.ID_REL} city={city}/>})
  : <p>Usa el buscador para ver el tiempo en los distintos municipios de la provincia de Barcelona</p>}
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default App;
