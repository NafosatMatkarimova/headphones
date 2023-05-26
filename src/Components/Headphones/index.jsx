import React from "react";
import Title from "../Title";

import './style.css'

import earYellow from '../../assets/images/ear-yellow.png';


const Headphones = () => {
    return(
        <div className="headphones-wrapper">
            <div className="container">
                <div className="content">
                 <div className="headphones-info">
                     <Title text={'Good headphones and loud music is all you need'} position={true}/>
                    <div className="headphones-info__box">
                      <div className="header-info__box-child">
                        <h3 className="box-child__title">Battery</h3>
                        <p className="box-child__text">Battery 6.2V-AAC codec</p>
                        <a href="/" className="box-child__link">Lern More</a>
                      </div>
                    
                      <div className="header-info__box-child">
                        <h3 className="box-child__title">Battery</h3>
                        <p className="box-child__text">Battery 6.2V-AAC codec</p>
                        <a href="/" className="box-child__link">Lern More</a>
                      </div>
                
                      <div className="header-info__box-child">
                        <h3 className="box-child__title">Battery</h3>
                        <p className="box-child__text">Battery 6.2V-AAC codec</p>
                        <a href="/" className="box-child__link">Lern More</a>
                      </div>
                    </div>
                 </div>
                    <div className="headphones-info__img"><img src={earYellow} alt="yellow" /></div>
                </div>
            </div>
        </div>
    )
}
export default Headphones;