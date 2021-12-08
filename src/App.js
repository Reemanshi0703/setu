import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import NavigationBar from "./components/NavigationBar";
import CardComponent from "./components/CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { ButtonToggle, Container, Row } from "reactstrap";
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
    prevArrow: <SamplePrevArrow />

  };

  return (
    <div className="App">
      <NavigationBar changeType={changeType} />
      {/* <Container>
        <Row className="mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            className="mySwiper"
          >
            {dataToDisplay.map((item) => {
              return (
                <>
                  <SwiperSlide>
                    <CardComponent {...item} />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </Row>
      </Container> */}
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
