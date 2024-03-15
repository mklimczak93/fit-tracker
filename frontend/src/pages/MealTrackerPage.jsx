import React from 'react';
import '../index.css';
import ImageHeader from '../components/ImageHeader';
import MealTrackerPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import MealTrackerIcon from '../assets/icons/project/meal-tracker-50-white.svg';
import MealRecord from '../components/MealRecord';
import DayLogCard from '../components/DayLogCard';
//icons
import AlcoholIcon from '../assets/icons/meal/alcohol-50-black.svg';
import BreakfastIcon from '../assets/icons/meal/breakfast-50-black.svg';
import DinnerIcon from '../assets/icons/meal/dinner-50-black.svg';
import LunchIcon from '../assets/icons/meal/lunch-50-black.svg';
import SnackIcon from '../assets/icons/meal/snack-50-black.svg';


export default function MealTrackerPage() {
    return(   
        <div className="section meal-tracker">
            <ImageHeader title = "Meal Tracker" photo = {MealTrackerPhoto } icon = { MealTrackerIcon } />
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
                        <h5>Kcal intake</h5>
                        <div className="vert-scroll">
                            <MealRecord icon={BreakfastIcon} mealName="Breakfast" description="15 g proteins, 20g carbs, 10g fat" calories="400"/>
                            <MealRecord icon={LunchIcon} mealName="Lunch" description="15 g proteins, 20g carbs, 10g fat" calories="500"/>
                            <MealRecord icon={DinnerIcon} mealName="Dinner" description="15 g proteins, 20g carbs, 10g fat" calories="700"/>
                            <MealRecord icon={DinnerIcon} mealName="Dinner" description="15 g proteins, 20g carbs, 10g fat" calories="700"/>
                            <MealRecord icon={DinnerIcon} mealName="Dinner" description="15 g proteins, 20g carbs, 10g fat" calories="700"/>
                        </div>
                    </div>
                    <div className="box kcal-burnt-box">
                        <h5>Add a new meal</h5>
                        <div className="vert-scroll">
                            
                        </div>    
                    </div>
            </div>
            
        </div>
)
}