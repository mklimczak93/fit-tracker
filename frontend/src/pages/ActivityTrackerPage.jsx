import React from 'react';
import { useState, useEffect } from 'react';
import '../index.css';
import ImageHeader from '../components/ImageHeader';
import ActivityTrackerPhoto from '../assets/project_photos/hero_photos/hero-photo-05.jpg';
import ActivityTrackerIcon from '../assets/icons/project/activity-tracker-50-white.svg';
import ActivityRecord from '../components/ActivityRecord';
import DayLogCard from '../components/DayLogCard';
//icons - meals
import AlcoholIcon from '../assets/icons/meal/alcohol-50-black.svg';
import BreakfastIcon from '../assets/icons/meal/breakfast-50-black.svg';
import DinnerIcon from '../assets/icons/meal/dinner-50-black.svg';
import LunchIcon from '../assets/icons/meal/lunch-50-black.svg';
import SnackIcon from '../assets/icons/meal/snack-50-black.svg';
//icons - activity
import BasketballIcon from '../assets/icons/activity/basketball-50-black.svg';
import ClimbingIcon from '../assets/icons/activity/climbing-50-black.svg';
import CyclingIcon from '../assets/icons/activity/cycling-50-black.svg';
import EquestrianIcon from '../assets/icons/activity/equestrian-50-black.svg';
import FitnessIcon from '../assets/icons/activity/fitness-50-black.svg';
import FootballIcon from '../assets/icons/activity/football-50-black.svg';
import GolfIcon from '../assets/icons/activity/golf-50-black.svg';
import MartialArtsIcon from '../assets/icons/activity/martialarts-50-black.svg';
import OtherIcon from '../assets/icons/activity/other-50-black.svg';
import RunningIcon from '../assets/icons/activity/running-50-black.svg';
import SurfingIcon from '../assets/icons/activity/surfing-50-black.svg';
import SwimmingIcon from '../assets/icons/activity/swimming-50-black.svg';
import TennisIcon from '../assets/icons/activity/tennis-50-black.svg';
import VolleyballIcon from '../assets/icons/activity/volleyball-50-black.svg';
import WeightliftingIcon from '../assets/icons/activity/weightlifting-50-black.svg';





export default function ActivityTrackerPage() {
    const [ error, setError ] = useState('');
    const [ emptyFields, setEmptyFields ] = useState('');

    const [ activity, setActivity ] = useState('');


    function handleSubmit() {
        console.log('Submitting!')
    }


    return(   
        <div className="section activity-tracker">
            <ImageHeader title = "Acivity Tracker" photo = { ActivityTrackerPhoto } icon = { ActivityTrackerIcon } />
            <div className="row row-1fr hor-scroll">
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />

            </div>
            <div className="row row-3-5fr">
            <div className="box kcal-intake-box">
                        <h5>Kcal burn</h5>
                        <div className="vert-scroll">
                            <ActivityRecord icon={DinnerIcon} activityName="Swimming" duration="60 min" calories="700"/>
                            <ActivityRecord icon={DinnerIcon} activityName="Tennis" duration="75 min" calories="600"/>
                            <ActivityRecord icon={DinnerIcon} activityName="Running" duration="40 min" calories="500"/>
                        </div>
                    </div>
                    <div className="box kcal-burnt-box">
                        <h5>Add a new activity</h5>
                        <div className="vert-scroll">
                            <form className="meal-form" onSubmit={handleSubmit}>
                                { error && <p className="error-message">Error: {error}</p> }
                                <label className="form-label margin-top-30">Choose a category:</label>
                                <div className="category-choice">
                                    {/* category 1 */}
                                    <button className="category-choice-button">
                                        <img src = { SwimmingIcon } className="icon icon-30" alt="Swimming category" />
                                    </button>
                                    {/* category 2 */}
                                    <button className="category-choice-button">
                                        <img src = { RunningIcon } className="icon icon-30" alt="Running category" />
                                    </button>
                                    {/* category 3 */}
                                    <button className="category-choice-button">
                                        <img src = { SurfingIcon } className="icon icon-30" alt="Surfing category" />
                                    </button>
                                    {/* category 4 */}
                                    <button className="category-choice-button">
                                        <img src = { MartialArtsIcon } className="icon icon-30" alt="Martial Arts category" />
                                    </button>
                                    {/* category 5 */}
                                    <button className="category-choice-button">
                                        <img src = { CyclingIcon } className="icon icon-30" alt="Cycling category" />
                                    </button>
                                    {/* category 6 */}
                                    <button className="category-choice-button">
                                        <img src = { OtherIcon } className="icon icon-30" alt="Other sport category" />
                                    </button>
                                </div>
                                <div className="grid-2-2-vert">
                                    <label className="form-label">Add caloric value:</label>
                                    <input 
                                    type="number"
                                    className={emptyFields.includes('email') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setEmail(e.target.value)} 
                                    value={activity.kcal}>
                                    </input>

                                    <label className="form-label">Date:</label>
                                    <input 
                                    type="date"
                                    className={emptyFields.includes('password') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setPassword(e.target.value)} 
                                    value={activity.date}>
                                    </input>
                                </div>
                                <div className="grid-2-3-hor">
                                    <label className="form-label">Name:</label>
                                    <input 
                                    type="text"
                                    className={emptyFields.includes('password') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setPassword(e.target.value)} 
                                    value={activity.proteins}>
                                    </input>

                                    <label className="form-label">Duration:</label>
                                    <input 
                                    type="text"
                                    className={emptyFields.includes('password') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setPassword(e.target.value)} 
                                    value={activity.duration}>
                                    </input>

                                </div>
                                

                                <input type="submit" className="simple-button" value="Add a new activity"/>
                            </form>
                        </div>    
                    </div>
            </div>
            
        </div>
)
}