import { useContext, useEffect, useState } from "react";
import { InsuranceContext } from "../../context/InsuranceContext/InsuranceContext";

import FormHeader from "../FormHeader/FormHeader";

import "./Summary.scss";

const Summary = () => {
  const { insuranceCategory, insurancePackage, insuranceAddition, startDate, endDate, persons, packagePrice } = useContext(InsuranceContext);

  const [total, setTotal] = useState(0);
  const [numOfDay, setNumOfDays] = useState(0);
  const [errorDate, setErrorDate] = useState(false);

  useEffect(() => {
    let packageTotalPrice;
    let sportPrice = 0;
    let stornoPrice = 0;

    let today = new Date();
    let start = new Date(startDate);
    let end = new Date(endDate);
    
    let todayTimeDiff = today.getTime() - start.getTime();
    let todayDaysDiff = todayTimeDiff / (1000 * 3600 * 24);
  
    if(todayDaysDiff > 1){
      setErrorDate(true);
    }

    if (insuranceCategory === "short-term") {
      let timeDiff = end.getTime() - start.getTime();
      let daysDiff = timeDiff / (1000 * 3600 * 24);

      setNumOfDays(daysDiff + 1);

      if (insuranceAddition.length > 0) {
        if (insuranceAddition.includes("storno")) {
          stornoPrice = packagePrice * 0.5;
        }

        if (insuranceAddition.includes("sport")) {
          sportPrice = packagePrice * 0.3;
        }

        packageTotalPrice = packagePrice + sportPrice + stornoPrice;
      } else {
        packageTotalPrice = packagePrice;
      }

      setTotal(persons * (numOfDay * packageTotalPrice));
    } else {
      setNumOfDays(365);

      if (insuranceAddition.length > 0) {
        if (insuranceAddition.includes("storno")) {
          stornoPrice = packagePrice * 0.2;
        }

        if (insuranceAddition.includes("sport")) {
          sportPrice = packagePrice * 0.1;
        }

        packageTotalPrice = packagePrice + sportPrice + stornoPrice;
      } else {
        packageTotalPrice = packagePrice;
      }

      setTotal(persons * packageTotalPrice);
    }
  }, [persons, startDate, endDate, insuranceCategory, numOfDay, packagePrice, insuranceAddition]);

  const Error = ({ children }) => <div className="error">{children}</div>;

  return (
    <div className="summary">
      <FormHeader text="Súhrn" />
      <div>
        <div>Variant</div>
        <div>{insuranceCategory === "short-term" ? "Krátkodobé poistenie" : "Celoročné poistenie"}</div>
      </div>
      <div>
        <div>Balík</div>
        <div>{insurancePackage === "basic" ? "Základný balík" : insurancePackage === "extended" ? "Rozšírený balík" : "Extra balík"}</div>
      </div>
      <div>
        <div>Pripoistenie</div>
        <div>{insuranceAddition.length > 0 ? insuranceAddition.map((item) => item) : "Žiadne pripoistenie"}</div>
      </div>
      <div>
        <div>Začiatok poistenia</div>
        <div>{errorDate ? <Error>Začiatok musí byt minimálne dnešný dátum</Error> : startDate}</div>
      </div>
      <div>
        <div>Koniec poistenia</div>
        <div>{endDate}</div>
      </div>
      <div>
        <div>Počet dní</div>
        <div>{numOfDay > 0 ? numOfDay : 0}</div>
      </div>
      <div>
        <div>Počet osôb</div>
        <div>{persons}</div>
      </div>
      <div>
        <div>Výška poistného</div>
        <div>{numOfDay > 0 ? total.toLocaleString("sk", { style: "currency", currency: "EUR" }) : <Error>Poistenie musí trvať minimálne 1 deň</Error>}</div>
      </div>
    </div>
  );
};

export default Summary;
