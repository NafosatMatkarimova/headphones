import React from "react";
import headerImg from '../../../assets/images/header-img.png'

import './style.css'


const HeaderInfo = () => {
    return(
      <div>
        <div className="container">
          <div className="content">
          <div className="header-info__img">
                <img src={headerImg} alt="img" />
            </div>
            <div className="header-info__box">
                <h1 className="header-info__box-subtitle">Hear it. Feel it</h1>
                <h2 className="header-info__box-title">Move with the music</h2>
                <div className="header-info__price-box">
                    <span className="header-info__price">$ 435</span>
                    <span className="header-info__old-price">$ 465</span>
                </div>
                <button className="header-info__button btn">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default HeaderInfo;