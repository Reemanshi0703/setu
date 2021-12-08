import React, { useRef, useState } from "react";
import {
  Container,
} from "reactstrap";
import menuIcon from "../../../../assets/images/js-logo.png";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../assets/styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const itemArray = [
  { name: "tummy", img: menuIcon },
  { name: "eye", img: menuIcon },
  { name: "skin", img: menuIcon },
  { name: "sleep", img: menuIcon },
  { name: "weight", img: menuIcon },
  { name: "health", img: menuIcon },
  { name: "hair", img: menuIcon },
];
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
const NavigationBar = ({ changeType }) => {
  let sliderRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);
  const onItemClick = (index) => {
    setActiveItem(index);
    sliderRef.current.slickGoTo(index, true);
  };

  return (
    <>
      <Container fluid>
        <div className="navbar-brand">
          <span className="bold-logo">Health</span>
          <span className="normal-logo">Goals</span>
        </div>
      </Container>

      <Slider {...settings} ref={sliderRef} className="header">
        {itemArray.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                changeType(item.name)
                onItemClick(index)
              } }
              className={index === activeItem ? "active" : ""}
            >
              <img src={item.img} alt="icon" />
              <span className="menu-name">{item.name}</span>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default NavigationBar;
