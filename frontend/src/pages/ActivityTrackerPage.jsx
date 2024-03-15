import React from 'react';
import '../index.css';
import ImageHeader from '../components/ImageHeader';
import ActivityTrackerPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import ActivityTrackerIcon from '../assets/icons/project/activity-tracker-50-white.svg';
import ActivityRecord from '../components/ActivityRecord';
import DayLogCard from '../components/DayLogCard';
//icons
import AlcoholIcon from '../assets/icons/meal/alcohol-50-black.svg';
import BreakfastIcon from '../assets/icons/meal/breakfast-50-black.svg';
import DinnerIcon from '../assets/icons/meal/dinner-50-black.svg';
import LunchIcon from '../assets/icons/meal/lunch-50-black.svg';
import SnackIcon from '../assets/icons/meal/snack-50-black.svg';

export default function ActivityTrackerPage() {
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
                        
                        </div>    
                    </div>
            </div>
            
        </div>
)
}