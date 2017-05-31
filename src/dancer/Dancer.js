import React from "react";
import "./dancer.css";

const Dancer = ({id, className}) => (
    <svg id={id} className={`dancer ${className}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 120 120">
        <g>
            <circle cx="60" cy="60" r="50" stroke="black" strokeWidth="2" fill="black"/>
            <polygon points="21,28 60,0 99,28" style={{fill:"rgb(0,0,0)"}}/>
        </g>
    </svg>
);

export default Dancer;