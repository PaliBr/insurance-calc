import { useContext } from "react";
import { InsuranceContext } from "../../context/InsuranceContext/InsuranceContext";

import "./FormCategory.scss";

const FormCategory = ({ text, value }) => {
  const { insuranceCategory, setInsuranceCategory, setInsurancePackage, startDate, setEndDate } = useContext(InsuranceContext);

  let buttonClass = insuranceCategory === value ? "form-category active" : "form-category";

  const handleChange = () => {
    let currentStartDate = new Date(startDate);
    let newEndDate;
    if (value === "long-term") {
      newEndDate = currentStartDate.setFullYear(currentStartDate.getFullYear() + 1);
    } else {
      let date = currentStartDate.setDate(currentStartDate.getDate() + 1);
      date = new Date(date);
      newEndDate = date.setFullYear(date.getFullYear());
    }
    newEndDate = new Date(newEndDate).toISOString().slice(0, 10);
    setEndDate(newEndDate);
    setInsuranceCategory(value);
    setInsurancePackage('basic');
  };

  return (
    <button type="button" className={buttonClass} onClick={handleChange}>
      {text}
    </button>
  );
};

export default FormCategory;
