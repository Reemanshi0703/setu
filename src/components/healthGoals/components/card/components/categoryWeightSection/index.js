import React from "react";
import {
    CardBody,
    Input,
    Button
  } from "reactstrap";
const CategoryWeightSection = () => {
  return (
    <CardBody className="bottom-cart">
      <div className="bottom-cart-left">
        <Input id="exampleSelect" name="select" type="select">
          <option>120 gms</option>
          <option>130 gms</option>
          <option>140 gms</option>
          <option>150 gms</option>
        </Input>
      </div>
      <div className="bottom-cart-right">
        <Button className="add-btn">Add</Button>
      </div>
    </CardBody>
  );
};
export default CategoryWeightSection;
