import React from "react";
import DataStoring from "./components/Data-Storing/Data-storing";
import PercentData from "./components/CoolPercent/Percent-data";
import NumberDays from "./components/Number-Days/Number-days";
import DataRetrieved from "./components/Data-Retrieve/Data-retrieved";
import MonthlySaving from ".//components/Monthly/Monthly-saving";
import SelectRegion from "./components/Region/Select-Region";
import { AppProvider } from "./Context/AppContext";
import "./App.css";

const App = () => {
  return (
    <AppProvider>
      <div className="Container">
        <h1 className="header">
          Standard Storage With Cooling Access Cost Saving Calculator
        </h1>
        <hr></hr>
        <div className="Layout">
          <div className="Country">
            <SelectRegion></SelectRegion>
          </div>
          <div className="Data-store">
            <h2>How much Amount of Data You want to Store?</h2>
            <DataStoring></DataStoring>
          </div>
          <div className="Percent-day">
            <h2> Percentage of this data to be considered cool?</h2>
            <PercentData></PercentData>
          </div>
          <div className="Number-day">
            <h2>How many days should this data be considered cool? </h2>
            <NumberDays></NumberDays>
          </div>
          <div className="Percent-retrieved">
            <h2>
              What percentage of this cool data are you likely to retrieve?
            </h2>
            <DataRetrieved></DataRetrieved>
          </div>
          <br></br>
          <div className="Monthly-saving">
            <MonthlySaving></MonthlySaving>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
