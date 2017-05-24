import React from "react";

const Dancer = ({id}) => (
    <svg id={id} xmlns="http://www.w3.org/2000/svg" width="120" height="120">
        <g>
            <circle cx="60" cy="60" r="50" stroke="black" strokeWidth="2" fill="black"/>
            <polygon points="92,21 120,60 92,99" style={{fill:"rgb(0,0,0)"}}/>
        </g>
    </svg>
);

export default Dancer;