import React from 'react';
import './style.css'


import logo from "../../../assets/images/logo.png";
import search from '../../../assets/images/search.png';
import icon from '../../../assets/images/icon.png';
import iconPer from '../../../assets/images/icon-per.png';
import iconLine from '../../../assets/images/icon-line.png';
import { Link } from 'react-router-dom';


const HeaderNav = () => {
    return(
       <div className="header-nav">
         <div className="container">
        <div className="content  p-20">
         <Link to="/" className='logo'><img src={logo} alt='logo' /></Link>
            <nav className="header-nav__nav">
                <div className="header-nav__nav-link">
                    <img src={search} alt="search" />
                </div>
                <div className="header-nav__nav-link">
                    <Link to='/contact'>
                    <img src={icon} alt="icon" />
                    </Link>
                </div>
                <div className="header-nav__nav-link">
                   <Link to='/about'>
                   <img src={iconPer} alt="per" />
                   </Link>
                </div>
            </nav>
            <div>
               <button className='burger-menu'>
               <img src={iconLine} alt="line" />
               </button>
            </div>
          </div>
        </div>
        </div>
    )
}
export default HeaderNav;