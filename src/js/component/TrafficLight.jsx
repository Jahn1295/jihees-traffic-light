import React, { useState } from 'react';

export function TrafficLight() {
    const [color, setColor] = useState("red");

    console.log({ color })


    return (
        <div className='trafficLightBody'>
            <div className={`redLight ${color === "red" ? "selected" : ""}`}
            onClick={() => setColor('red')}></div>
            <div className={`yellowLight ${color === "yellow" ? "selected" : ""}`}
            onClick={() => setColor('yellow')}></div>
            <div className={`greenLight ${color === "green" ? "selected" : ""}`}
            onClick={() => setColor('green')}></div>
        </div>
    )
}