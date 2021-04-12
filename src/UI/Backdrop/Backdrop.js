import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = (props) => {
    return (
        <div style={{zIndex: props.index}} onClick={props.clicked} className={classes.Backdrop}>

        </div>
    )
}

export default backdrop;