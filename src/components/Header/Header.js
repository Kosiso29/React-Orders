import React from "react";

import classes from "./Header.module.css";

const header = (props) => {
    return (
        <div>
            <h1 className={classes.Header}>{props.header}</h1>
        </div>
    )
}

export default header;