import React from "react";
import Title from "../Title";
import headphonesData from "../../Data";

import './style.css'

import earYellow from '../../assets/images/ear-yellow.png';


const Headphones = () => {

  return (
    <div className="headphones-wrapper">
      <div className="container">
        <div className="content">
          <div className="headphones-info">
            <Title text={'Good headphones and loud music is all you need'} position={true} />
            <div className="headphones-info__box">

             

              {
                headphonesData.map((el) => (
                  <div className="info" key={el.id}>
                  <div className="box-childe__img">
                    <img src={el.image} alt={el.title} />
                  </div>
                  <div className="header-info__box-child">
                    <h3 className="box-child__title">{el.title}</h3>
                    <p className="box-child__text">{el.text}</p>
                    <a href={el.href} className="box-child__link">{el.link}</a>
                  </div>
                </div>
                  ))}
            </div>
          </div>
          <div className="headphones-info__img"><img src={earYellow} alt="yellow" /></div>
        </div>
      </div>
    </div>
  )
}
export default Headphones;