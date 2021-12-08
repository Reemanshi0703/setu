import React, { useState } from "react";
import NavigationBar from "./components/header";
import CardComponent from "./components/card";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./utils";
import leftArrow from "../../assets/images/left.png";
import rightArrow from "../../assets/images/right.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function HealthGoals() {
  const [dataToDisplay, SetDataToDisplay] = useState(data.eye);
  const changeType = (type) => {
    SetDataToDisplay(data[type]);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: dataToDisplay.length > 3 ? 3 : dataToDisplay.length,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: dataToDisplay.length > 3 ? 3 : dataToDisplay.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: dataToDisplay.length > 2 ? 2 : dataToDisplay.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <NavigationBar changeType={changeType} />
      <div className="container">
        <Slider {...settings}>
          {dataToDisplay.map((item, index) => {
            return <CardComponent key={index} {...item} />;
          })}
          
        </Slider>
      </div>
    </div>
  );
}

export default HealthGoals;
