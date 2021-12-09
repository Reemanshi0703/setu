import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { itemArray } from "../../utils";
import MobileHeader from "./mobileHeader";
import DesktopHeader from "./desktopHeader";

const Header = ({ onClick }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    if (window.innerWidth < 750) {
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
          {isDesktop ? (
            <DesktopHeader onClick={onItemClick} activeItem={activeItem}/>
          ) : (
            <MobileHeader onClick={onItemClick} activeItem={activeItem} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Header;
