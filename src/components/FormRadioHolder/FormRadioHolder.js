import FormRadio from "../FormRadio/FormRadio";

import './FormRadioHolder.scss';

const FormRadioHolder = ({ basic, extended, extra }) => {
  return (
    <div className="form-radio-holder">
      <div className="form-radio-holder--label">Balík</div>
      <div className="form-radio-holder--inputs">
        <FormRadio text="Základný balík" value="basic" price={basic} />
        <FormRadio text="Rozšírený balík" value="extended" price={extended} />
        <FormRadio text="Extra balík" value="extra" price={extra} />
      </div>
    </div>
  );
};

export default FormRadioHolder;
