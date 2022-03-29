import FormCategory from "../FormCategory/FormCategory";

import "./FormCategoryHolder.scss";

const FormCategoryHolder = () => {
  return (
    <div className="form-category-holder">
      <FormCategory text="Krátkodobé poistenie" value="short-term" />
      <FormCategory text="Celoročné poistenie" value="long-term" />
    </div>
  );
};

export default FormCategoryHolder;
