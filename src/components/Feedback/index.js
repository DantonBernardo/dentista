import React from "react";
import Slider from "react-slick";
import './style.css';

import avaliacao1 from '../../images/avaliacao1.png';
import avaliacao2 from '../../images/avaliacao2.png';

export default function Exemplo(){
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return(
    <div className="feedback" id="feedback">
      <div className="title">
        <h4>Não ouça apenas nós!</h4>
        <h2>O que nossos clientes dizem?</h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h3><img src={avaliacao1} alt="Feedback 1"/></h3>
          </div>
          <div>
            <h3><img src={avaliacao2} alt="Feedback 2"/></h3>
          </div>
          <div>
            <h3><img src={avaliacao1} alt="Feedback 3"/></h3>
          </div>
          <div>
            <h3><img src={avaliacao2} alt="imFeedback 4"/></h3>
          </div>
          <div>
            <h3><img src={avaliacao1} alt="Feedback 5"/></h3>
          </div>
          <div>
            <h3><img src={avaliacao2} alt="Feedback 6"/></h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};