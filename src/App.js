import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import NavigationBar from "./components/NavigationBar";
import CardComponent from "./components/CardComponent";
import * as data from "./data.json";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, display: "block" }}
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
function App() {
  const [dataToDisplay, SetDataToDisplay] = useState(data.default.eye);
  const changeType = (type) => {
    SetDataToDisplay(data.default[type]);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="App">
      <NavigationBar changeType={changeType} />
     <div className="container">
        <Slider {...settings}>
        {dataToDisplay.map((item) => {
              return (
                    <CardComponent {...item} />
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

export default App;
