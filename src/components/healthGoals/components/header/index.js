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
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../assets/styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-next`}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-prev`}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
const itemArray = [
  {name:"tummy", img: menuIcon },  {name:"eye", img: menuIcon },  {name:"skin", img: menuIcon }, {name:"sleep", img: menuIcon }, {name:"weight", img: menuIcon }, {name:"health", img: menuIcon }, {name:"hair", img: menuIcon }];
const settings = {
    centerMode: true,

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
function NavigationBar({ changeType }) {
  let sliderRef = useRef(null);

  const onItemClick = (index) => {
    sliderRef.current.slickGoTo(index, true)
  }

  return (
    <>
      {/* <Navbar expand="md" light>
        <Container className="menu-container">
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
      </Navbar> */}
      
        <Container fluid>
        <div className="navbar-brand">
          <span className="bold-logo">Health</span>
          <span className="normal-logo">Goals</span>
        </div>
        </Container>
        
      <Slider {...settings} ref={sliderRef} className="header">
          {itemArray.map((item, index) => {
            return <div key={index} onClick={() => onItemClick(index)}>
              <img src={item.img} alt="icon" />
            <span className="menu-name">{item.name}</span>
            </div>;
          })}
        </Slider>
    </>
  );
}

export default NavigationBar;
