import React from 'react';
import '../index.css';

export default function MealRecord(props) {
    return (
        <div className="record meal-record">
            <img src = {props.icon} className="icon icon-30 meal-icon" />
            <div className="record-description">
                <h4>{props.mealName}</h4>
                <p className="grey-text">{props.description}</p>
            </div>
            <div className="record-calories">
                <h3>{props.calories}</h3>
            </div>
        </div>
    )
}