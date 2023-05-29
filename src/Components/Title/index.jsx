import React from "react";
import classNames from "classnames";

import './style.css'

const Title = ({text, position}) => {

    return <h2 className={classNames('title', position && 'left')}>{text}</h2>
}
export default Title;
