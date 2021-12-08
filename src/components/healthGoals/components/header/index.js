import React, { useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import menuIcon from "../../../../assets/images/js-logo.png";

const itemArray = ["bestsellers", "eye", "skin", "sleep", "tummy", "weight", "tummy"];

function NavigationBar({ changeType }) {
  let scrollRefRecords = useRef({});
  itemArray.forEach((item) => {
    scrollRefRecords.current[item] = React.createRef();
  });
  const scroll = (item) => {
    scrollRefRecords.current[item].current.scrollIntoView({ inline: "center" });
  };
  return (
    <>
      <Navbar expand="md" light>
        <Container fluid className="menu-container">
          <div>
            <NavbarBrand to="/" className="navbar-brand">
              <span className="bold-logo">Health</span>{" "}
              <span className="normal-logo">Goals</span>
            </NavbarBrand>
          </div>
          <div>
            <Nav className="me-auto" navbar>
              {itemArray.map((item, index) => {
                return (
                  <div ref={scrollRefRecords.current[item]}>
                    <NavItem
                      id={`index_${index}`}
                      onClick={() => {
                        changeType(item);
                        scroll(item);
                      }}
                    >
                      <NavLink to="/" className="active">
                        <img src={menuIcon} alt="icon" />
                        <span className="menu-name">{item}</span>
                      </NavLink>
                    </NavItem>
                  </div>
                );
              })}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
