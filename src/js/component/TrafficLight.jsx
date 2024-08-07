import React, { useState } from 'react';

export function TrafficLight() {
    const [color, setColor] = useState("red");

    console.log({ color })


    return (
        <div className='trafficLightBody'>
            <div className={`redLight ${color === "red" ? "selected" : ""}`}
            onClick={() => setColor('red')}></div>
            <div className={`orangeLight ${color === "orange" ? "selected" : ""}`}
            onClick={() => setColor('orange')}></div>
            <div className={`greenLight ${color === "green" ? "selected" : ""}`}
            onClick={() => setColor('green')}></div>
        </div>
    )
}