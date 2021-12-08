import React, { useState } from "react";
import Header from "./components/header";
import {data} from "./utils";
import CardContainer from "./components/cardContainer";

const HealthGoals = () => {
  const [dataToDisplay, setDataToDisplay] = useState(data.eye);
  const changeHealthType = (type) => {
    setDataToDisplay(data[type]);
  };

  return (
    <div className="App">
      <Header onClick={changeHealthType} />
      <CardContainer items={dataToDisplay}/>
    </div>
  );
}

export default HealthGoals;
