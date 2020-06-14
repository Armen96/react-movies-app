import React from "react";
import {useComponentRendersCount} from "../hooks/useComponentRendersCount";

const AboutCounter = React.memo(({ counter }) => {

    useComponentRendersCount();

    return (
        <div>About Counter { counter }</div>
    );
})

export default AboutCounter;
