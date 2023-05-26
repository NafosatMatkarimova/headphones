import React from "react";
import classNames from "classnames";

import './style.css'

const Title = (props, position) => {
    return <h2 classNames={classNames('title',position && 'left')}>{props.text}</h2>
}
export default Title;
