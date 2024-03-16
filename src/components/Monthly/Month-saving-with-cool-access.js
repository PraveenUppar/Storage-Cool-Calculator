import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const monthly_hours = 730;
const cool_rates = 0.0001;
const standard_region_rates = 0.0001;
const standard_network_rates = 0.02;

let hot_hours;
let cool_hours;
let Month_12_Store_cool;
let Month_1_part_1;
let Month_1_part_2;
let Standard_month_1_cost;
let Cool_const_Month_1;
let Total_Network;
let Retrieve_Cost;
let Month_2_store_cool;
let standard_cool_month_2;
let Month_2_cool_cost;
let Total_Cost_Month;
let Without_cool;
let Total_saving;
let monthly_saving;
let year_1;
let year_2;
let year_3;

const MonthSavingCool = () => {
  const { data_size, days_cool, data_retrieve, cool_percent, region } =
    useContext(AppContext);

  const standard_rates = () => {
    if (region == "India") {
      return 0.000223;
    } else if (region == "Australia") {
      return 0.000292;
    } else {
      return 0.000202;
    }
  };

  // Calculating Hot Hours
  hot_hours = (days_cool * 24) % monthly_hours;

  // Calculating Cool Hours
  cool_hours = monthly_hours - hot_hours;

  // Calculating Month-12 Store_cool
  Month_12_Store_cool = data_size * 1024 * (cool_percent / 100);

  // Calculating Month_1_part_1
  Month_1_part_1 = data_size * 1024 * standard_region_rates * hot_hours;

  // Calculating Month_1_part_2
  Month_1_part_2 =
    (data_size * 1024 - Month_12_Store_cool) *
    standard_region_rates *
    cool_hours;

  // Calculating Standard Month_1 cost
  Standard_month_1_cost = Month_1_part_1 + Month_1_part_2;

  // Calculating Cool_const_Month_1
  Cool_const_Month_1 = Month_1_part_2 * cool_rates * cool_hours;

  // Total Network
  Total_Network = (
    data_size *
    1024 *
    (cool_percent / 100) *
    standard_network_rates
  ).toFixed(2);

  // Retrieve Cost   ////// ALSO USED IN CALCULATION
  Retrieve_Cost =
    data_size * 1024 * (cool_percent / 100) * (data_retrieve / 100) * 0.024;

  // Month_2_store_cool
  Month_2_store_cool =
    data_size * 1024 * (cool_percent / 100) -
    data_size * 1024 * (cool_percent / 100) * (data_retrieve / 100);

  // Month_2_standard_cool   ///// ALSO USED IN CALCULATION
  standard_cool_month_2 = Math.abs(
    (data_size * 1024 - Month_2_store_cool) *
      standard_rates(region) *
      monthly_hours
  );

  // Month_2_cool_cost   ///// ALSO USED IN CALCULATION
  Month_2_cool_cost = Month_2_store_cool * cool_rates * monthly_hours;

  // Total_Cost_Month
  Total_Cost_Month = Month_2_store_cool + Month_2_cool_cost + Total_Network;

  // Without_cool
  Without_cool = Math.abs(
    data_size * monthly_hours * standard_rates(region) * 1024
  ).toFixed(2);

  // Total_saving
  Total_saving = (
    standard_cool_month_2 +
    Month_2_cool_cost +
    Retrieve_Cost
  ).toFixed(2);

  // Monthly Saving
  monthly_saving = (Without_cool - Total_saving).toFixed(2);

  // Year Calculations
  year_1 = (monthly_saving * 12).toFixed(2);
  year_2 = (monthly_saving * 24).toFixed(2);
  year_3 = (monthly_saving * 36).toFixed(2);

  // Region calculation

  return (
    <div className="calci-container">
      <div className="month-calci">
        <h1 className="month-saving">Monthly Saving : $ {monthly_saving}</h1>
        <h2 className="without_cool">Without Cool Access: $ {Without_cool}</h2>
        <h2 className="with-cool">With Cool Access: $ {Total_saving}</h2>
        <h2 className="withcool-components">
          Hot : $ {standard_cool_month_2}
          <br></br>
          Cool : $ {Month_2_cool_cost}
          <br></br>
          Network : $ {Retrieve_Cost}
        </h2>
      </div>

      <div className="annual-calci">
        <h1 className="annual-saving">Annual Savings :</h1>
        <h2 className="year-saving">
          Year 1 : $ {year_1}
          <br></br>
          Year 2 : $ {year_2}
          <br></br>
          Year 3 : $ {year_3}
        </h2>
      </div>
    </div>
  );
};

export default MonthSavingCool;
