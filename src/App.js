
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/main.scss';
import NavigationBar from './components/NavigationBar';
import CardComponent from './components/CardComponent';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Container, Row } from "reactstrap";
import * as data from "./data.json";
import React, {useState} from 'react'
function App() {
  const [ dataToDisplay , SetDataToDisplay ] = useState(data.default.eye);
  const changeType = (type)=> {
    SetDataToDisplay(data.default[type])
  }
  return (
    <div className="App">
      <NavigationBar changeType={changeType}/>
         <Container>
        <Row className="mt-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="mySwiper">
          {dataToDisplay.map((item)=>{
            return <>
            <SwiperSlide><CardComponent {...item}/></SwiperSlide>
            </>
          })}
      </Swiper>
        </Row>
       </Container>
    </div>
  );
}

export default App;
