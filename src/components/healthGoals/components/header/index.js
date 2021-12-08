import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { itemArray, headerSliderSettings } from "../../utils";
import Slider from "react-slick";

const Header = ({ onClick }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };
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
          {!isDesktop ? (
            <Slider {...headerSliderSettings} className="header">
              {itemArray.map((item) => {
                return (
                  <div
                    key={item.name}
                    onClick={() => {
                      onItemClick(item.name);
                    }}
                    className={`my-slick ${
                      item.name === activeItem ? "active-item" : ""
                    }`}
                  >
                    <img
                      src={
                        item.name === activeItem
                          ? item.activeImg
                          : item.inActiveImg
                      }
                      alt="icon"
                    />
                    <span className="menu-name">{item.name}</span>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <div className="header-wrapper">
              {itemArray.map((item) => {
                return (
                  <div className="header-menu" onClick={() => {
                    onItemClick(item.name);
                  }}>
                    <img
                      src={
                        item.name === activeItem
                          ? item.activeImg
                          : item.inActiveImg
                      }
                      alt="icon"
                    />
                    <p className="menu-name">{item.name}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Header;
