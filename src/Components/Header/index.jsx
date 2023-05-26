import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderInfo from "./HeaderInfo";

import './style.css'


const Header = () => {
    return(
        <div className="bg">
        <HeaderNav/>
        <HeaderInfo/>
        </div>
    )
}
export default Header;