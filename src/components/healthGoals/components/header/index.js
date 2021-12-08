import React, { useRef, useState } from "react";
import {
  Container,
} from "reactstrap";
import {itemArray} from "../../utils";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../assets/styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  centerMode: true,
  dots: false,
  slidesToShow: 7,
  speed: 500,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
      },
    },
  ],
};
const NavigationBar = ({ changeHealthType }) => {
  const [activeItem, setActiveItem] = useState(itemArray[1]);
  const onItemClick = (item) => {
    setActiveItem(item);
    changeHealthType(item);
  };
console.log("activeItem===>",activeItem)
  return (
    <>
      <Container fluid>
        <div className="main-header mb-4">
          <div className="navbar-brand">
            <span className="bold-logo">Health</span>
            <span className="normal-logo">Goals</span>
          </div>
          <Slider {...settings} className="header">
            {itemArray.map((item, index) => {
              return (
                <div
                  key={item.name}
                  onClick={() => {
                    onItemClick(item.name)
                  } }
                  className={`my-slick ${item.name === activeItem ? 'active-item': ""}`}
                >
                  <img src={item.img} alt="icon" />
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

export default NavigationBar;
