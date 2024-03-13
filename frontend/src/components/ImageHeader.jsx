import React from 'react';
import '../index.css';

export default function ImageHeader(props) {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }

    return (
        <div className="image-header" >
            <img src={ props.photo } alt="Overview header" className="image-header-image" />
            <div className="date-div">
                <h2 className="date-number">{day}</h2>
                <h2 className="date-number">{month}</h2>
            </div>
            <div className="main-title-div">
                <img src = {props.icon} className="icon icon-40" />
                <h1 className="main-title">{props.title}</h1>   
            </div>
            
        </div>
       
    )
}