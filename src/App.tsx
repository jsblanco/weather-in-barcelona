import React, {useEffect} from 'react';
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
} from '@elastic/eui';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions"


function App() {
  const dispatch = useDispatch();
  const {cities} = useSelector((state) => state.cities);
  const {selectedCities} = useSelector((state) => state.cities);

  useEffect(() => {
    if (!cities) dispatch(actions.getCitiesRequest())
  }, [])
  
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
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Content title</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>Content body</EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
  );
}

export default App;
