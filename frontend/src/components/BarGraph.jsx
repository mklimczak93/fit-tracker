import React from 'react';
import '../index.css';

export default function BarGraph(props) {
    let style = { width: props.value }
    return (
        <div className="bar-outer-div">
            <div className="bar-labels-div">
                <p> { props.label01 } </p>
                <p> { props.label01 } </p>
            </div>
            <div className="bar-inner-div">
                <div className="bar"></div>
                <div className="bar value" style = { style }></div>
            </div>
        </div>
    )
}