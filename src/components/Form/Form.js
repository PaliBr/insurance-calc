import { useContext } from "react";
import { InsuranceContext } from "../../context/InsuranceContext/InsuranceContext";

import FormHeader from "../FormHeader/FormHeader";
import FormCategoryHolder from "../FormCategoryHolder/FormCategoryHolder";
import FormDateInput from "../FormDateInput/FormDateInput";
import FormRadioHolder from "../FormRadioHolder/FormRadioHolder";
import FormCheckboxHolder from "../FormCheckboxHolder/FormCheckboxHolder";
import FormPersons from "../FormPersons/FormPersons";

import "./Form.scss";

const Form = () => {
  const { insuranceCategory, startDate, endDate } = useContext(InsuranceContext);

  return (
    <form className="form">
      <FormHeader text="Výpočet cestovného poistenia" />
      <FormCategoryHolder />
      <FormDateInput id="start-date" labelText="Začiatok poistenia" value={startDate} required={insuranceCategory === "short-term"}/>
      <FormDateInput id="end-date" labelText="Koniec poistenia" value={endDate} required={insuranceCategory === "short-term"} />
      {insuranceCategory === "short-term" ? <FormRadioHolder basic={1.2} extended={1.8} extra={2.4} /> : <FormRadioHolder basic={39} extended={49} extra={59} />}
      {insuranceCategory === "short-term" ? <FormCheckboxHolder storno={50} sport={30} /> : <FormCheckboxHolder storno={20} sport={10} />}
      <FormPersons />
    </form>
  );
};

export default Form;
