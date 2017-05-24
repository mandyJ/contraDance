import React from "react";
import "./dancer.css";


const Dancer = ({id}) => (
    <svg id={id} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 120 120">
        <g>
            <circle cx="60" cy="60" r="50" stroke="black" strokeWidth="2" fill="black"/>
            <polygon points="92,21 120,60 92,99" style={{fill:"rgb(0,0,0)"}}/>
        </g>
    </svg>
);

export default Dancer;