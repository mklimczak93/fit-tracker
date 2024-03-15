import React from 'react';
import '../index.css';

export default function ActivityRecord(props) {
    return (
        <div className="record activity-record">
            <img src = {props.icon} className="icon icon-30 activity-icon" />
            <div className="record-description">
                <h4>{props.activityName}</h4>
                <p className="grey-text">{props.duration}</p>
            </div>
            <div className="record-calories">
                <h3>{props.calories}</h3>
            </div>
        </div>
    )
}