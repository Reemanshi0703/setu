import React, { useState } from "react";
import Header from "./components/header";
import {CATEGORIES_RECORDS} from "./utils";
import CardContainer from "./components/cardContainer";

const HealthGoals = () => {
  const [dataToDisplay, setDataToDisplay] = useState(CATEGORIES_RECORDS.eye);
  const changeHealthType = (type) => {
    setDataToDisplay(CATEGORIES_RECORDS[type]);
  };

  return (
    <div className="App">
      <Header onClick={changeHealthType} />
      <CardContainer items={dataToDisplay}/>
    </div>
  );
}

export default HealthGoals;
