import React from "react";
import classes from './ErrorModal.module.css'

const Backdrop2 = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}/>
}

export default Backdrop2;