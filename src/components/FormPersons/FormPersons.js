import { useContext } from "react";
import { InsuranceContext } from "../../context/InsuranceContext/InsuranceContext";

import "./FormPersons.scss";

const FormPersons = () => {
  const { setPersons } = useContext(InsuranceContext);

    const handleChange = (e) => {
        setPersons(e.target.value);
    }

  return (
    <div className="form-persons">
      <div className="form-persons--label">Počet osôb</div>
      <div className="form-persons--select">
        <select onChange={handleChange} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};

export default FormPersons;
