import FormCheckbox from "../FormCheckbox/FormCheckbox";

import './FormCheckboxHolder.scss';

const FormCheckboxHolder = ({ storno, sport }) => {
  return (
    <div className="form-checkbox-holder">
      <div className="form-checkbox-holder--label">Pripoistenie</div>
      <div className="form-checkbox-holder--inputs">
        <FormCheckbox text="Storno cesty" value="storno" price={storno} />
        <FormCheckbox text="Športové aktivity" value="sport" price={sport} />
      </div>
    </div>
  );
};

export default FormCheckboxHolder;
