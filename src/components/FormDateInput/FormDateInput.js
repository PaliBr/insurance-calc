import { useContext } from "react";
import { InsuranceContext } from "../../context/InsuranceContext/InsuranceContext";

import "./FormDateInput.scss";

const FormInput = ({ id, labelText, value, required }) => {
  const { startDate, setStartDate, setEndDate, insuranceCategory } = useContext(InsuranceContext);

  const handleChange = (e) => {
    if (id === "start-date") {
      if (insuranceCategory === "long-term") {
        let currentStartDate = new Date(e.target.value);
        let newEndDate = currentStartDate.setFullYear(currentStartDate.getFullYear() + 1);
        newEndDate = new Date(newEndDate).toISOString().slice(0, 10);
        setEndDate(newEndDate);
      }
      setStartDate(e.target.value);
    } else {
      if (insuranceCategory === "long-term") {
        let currentStartDate = new Date(startDate);
        let newEndDate = currentStartDate.setFullYear(currentStartDate.getFullYear() + 1);
        newEndDate = new Date(newEndDate).toISOString().slice(0, 10);
        setEndDate(newEndDate);
      } else {
        setEndDate(e.target.value);
      }
    }
  };

  return (
    <div className="form-date-input">
      <label htmlFor={id}>{labelText}: </label>
      <input type="date" id={id} className="form-input" onChange={handleChange} value={value} required={required} disabled={id === "end-date" && insuranceCategory === "long-term"} />
    </div>
  );
};

export default FormInput;
