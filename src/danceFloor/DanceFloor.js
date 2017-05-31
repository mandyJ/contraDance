import React from "react";

import "./dance-floor.css"
import { direction } from "./../dancer/orientationConstants";

import Dancer from "./../dancer/Dancer";

const DanceFloor = () => {
    const dancer1 = {
        direction: direction.sixOClock
    };

    const dancer2 = {
        direction: direction.twelveOClock
    };

    const longLines = [
        dancer1,
        dancer2
    ];


    return (
        <div id="dance-floor">
            <Dancer id="dancer1" className="row1 col1"/>
            <Dancer id="dancer2" className="row2 col1"/>
        </div>
    )
};

export default DanceFloor;