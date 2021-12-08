import React from "react";
import CardComponent from "../card/index";
import Slider from "react-slick";
import { getCardSliderSettings } from "../../utils";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const CardContainer = ({ items }) => {
  const sliderSettings = getCardSliderSettings(items.length);
  sliderSettings.nextArrow = <NextArrow />;
  sliderSettings.prevArrow = <PrevArrow />;
  return (
    <div className="container card-slider">
      <Slider {...sliderSettings}>
        {items.map((item) => {
          return <CardComponent key={item.id} {...item} />;
        })}
      </Slider>
    </div>
  );
};
export default CardContainer;
