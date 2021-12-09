import React from "react";
import { itemArray } from "../../../utils";

const DesktopHeader = ({ onClick, activeItem }) => {
  return (
    <div className="header-wrapper">
      {itemArray.map((item) => {
        return (
          <div
            className={`header-menu ${
              item.name === activeItem ? "active-item" : ""
            }`}
            onClick={() => {
                onClick(item.name);
            }}
          >
            <img
              src={item.name === activeItem ? item.activeImg : item.inActiveImg}
              alt="icon"
            />
            <p className="menu-name">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default DesktopHeader;
