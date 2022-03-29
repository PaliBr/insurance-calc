import { useState } from "react";
import Form from "./components/Form/Form";
import Summary from "./components/Summary/Summary";

import { InsuranceContext } from "./context/InsuranceContext/InsuranceContext";

import "./App.scss";

const today = new Date().toISOString().slice(0, 10);
let date = new Date()
date = date.setDate(date.getDate() + 1);
const tomorrow = new Date(date).toISOString().slice(0, 10);

const App = () => {
  const [insuranceCategory, setInsuranceCategory] = useState("short-term");
  const [insurancePackage, setInsurancePackage] = useState("basic");
  const [insuranceAddition, setInsuranceAddition] = useState([]);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [persons, setPersons] = useState(1);
  const [packagePrice, setPackagePrice] = useState(1.2);
  const value = { insuranceCategory, setInsuranceCategory, insurancePackage, setInsurancePackage, insuranceAddition, setInsuranceAddition, startDate, setStartDate, endDate, setEndDate, persons, setPersons, packagePrice, setPackagePrice };

  return (
    <InsuranceContext.Provider value={value}>
      <div className="app">
        <div className="app--content">
          <Form />
          <Summary />
        </div>
      </div>
    </InsuranceContext.Provider>
  );
};

export default App;
