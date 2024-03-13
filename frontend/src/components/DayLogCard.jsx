import React from 'react';
import '../index.css';
import BarGraph from './BarGraph';

export default function DayLogCard(props) {
    
    return (
        <div className = "box card">
            <div className="top">
                <p>{props.date}</p>
                <BarGraph label01 = "" label02="" value={props.value}/>
            </div>
            <div className="bottom">
                <p>kcal</p>
                <h3>{props.kcal}</h3>
            </div>
        </div>
    )
}