import React from 'react';
import ImageHeader from '../components/ImageHeader';
import MealTrackerPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import MealTrackerIcon from '../assets/icons/project/meal-tracker-50-white.svg';
import '../index.css';

export default function MealTrackerPage() {
    return(   
        <div className="section meal-tracker">
            <ImageHeader title = "Meal Tracker" photo = {MealTrackerPhoto } icon = { MealTrackerIcon } />
            <div class="under-image">
                MEAL TRACKER
            </div>
            
        </div>
)
}