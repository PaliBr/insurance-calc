import { useContext, useEffect } from "react";
import { InsuranceContext } from "../../context/InsuranceContext/InsuranceContext";

import "./FormRadio.scss";

const FormRadio = ({ text, value, price }) => {
  const { insurancePackage, setInsurancePackage, insuranceCategory, setPackagePrice } = useContext(InsuranceContext);

  useEffect(() => {
    if (insurancePackage === value) {
      setPackagePrice(price);
    }
  });

  const handleChange = (e) => {
    setPackagePrice(price);
    setInsurancePackage(e.target.value);
  };

  return (
    <div className="form-radio">
      <input type="radio" id={value} name="package" value={value} onChange={handleChange} checked={insurancePackage === value} required />
      <label htmlFor={value}>
        <div className="form-radio--text">{text}</div>
        <div className="form-radio--price">
          {price.toLocaleString("sk", { style: "currency", currency: "EUR" })} {insuranceCategory === "short-term" && " / ďeň"}
        </div>
      </label>
    </div>
  );
};

export default FormRadio;
