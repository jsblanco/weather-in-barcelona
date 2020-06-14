import React, { useEffect } from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from "@elastic/eui";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import SearchBox from "./components/SearchBox";
import CityCard from "./components/CityCard";

function App() {
  const dispatch = useDispatch();
  const { cities, weatherData } = useSelector((state) => state);

  useEffect(() => {
    if (cities.length===0) dispatch(actions.getCitiesRequest());
  }, []);

  return (
    <EuiPage>
      <EuiPageBody component="div" className="overflow-auto p-5">
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l" className="text-center">
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
          <EuiPageContentBody>
  {!!weatherData && weatherData.map(city=>{return <CityCard key={city.id} city={city}/>})}
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default App;
