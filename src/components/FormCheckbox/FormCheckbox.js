import { useContext } from "react";
import { InsuranceContext } from "../../context/InsuranceContext/InsuranceContext";

import './FormCheckbox.scss';

const FormCheckbox = ({ text, value, price }) => {
  const { insuranceAddition, setInsuranceAddition } = useContext(InsuranceContext);

  const handleChange = (e) => {
    let newArr = [...insuranceAddition];
    if (e.target.checked) {
      newArr.includes(e.target.value) === false && newArr.push(e.target.value);
    } else {
      newArr = newArr.includes(e.target.value) === true && newArr.filter((item) => item !== e.target.value);
    }
    setInsuranceAddition(newArr);
  };

  return (
    <div className="form-checkbox">
      <input type="checkbox" id={value} value={value} onChange={(e) => handleChange(e)} />
      <label htmlFor={value}>
        <div className="form-checkbox--text">{text}</div>
        <div className="form-checkbox--price">{price} %</div>
      </label>
    </div>
  );
};

export default FormCheckbox;
