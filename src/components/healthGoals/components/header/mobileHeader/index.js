import React from "react";
import Slider from "react-slick";
import { itemArray, headerSliderSettings } from "../../../utils";

const MobileHeader = ({ onClick, activeItem }) => {
  return (
    <Slider {...headerSliderSettings} className="header">
      {itemArray.map((item) => {
        return (
          <div
            key={item.name}
            onClick={() => {
                onClick(item.name);
            }}
            className={`my-slick ${
              item.name === activeItem ? "active-item" : ""
            }`}
          >
            <img
              src={item.name === activeItem ? item.activeImg : item.inActiveImg}
              alt="icon"
            />
            <span className="menu-name">{item.name}</span>
          </div>
        );
      })}
    </Slider>
  );
};
export default MobileHeader;
