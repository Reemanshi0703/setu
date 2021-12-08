import React, { useState } from "react";
import {
  Container,
} from "reactstrap";
import {itemArray, headerSliderSettings } from "../../utils";
import Slider from "react-slick";

const Header = ({ onClick }) => {
  const [activeItem, setActiveItem] = useState(itemArray[0].name);
  const onItemClick = (item) => {
    setActiveItem(item);
    onClick(item);
  };
  return (
    <>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="main-header mb-4">
          <div className="navbar-brand">
            <span className="bold-logo">Health</span>
            <span className="normal-logo">Goals</span>
          </div>
          <Slider {...headerSliderSettings} className="header">
            {itemArray.map((item) => {
              return (
                <div
                  key={item.name}
                  onClick={() => {
                    onItemClick(item.name)
                  } }
                  className="my-slick"
                >
                  <img src={item.name === activeItem ? item.img : item.inActive} alt="icon" />
                  <span className="menu-name">{item.name}</span>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default Header;
