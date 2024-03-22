import React from 'react';
import '../index.css';
import { useState } from 'react';
import ImageHeader from '../components/ImageHeader';
import MealTrackerPhoto from '../assets/project_photos/hero_photos/hero-photo-06.jpg';
import MealTrackerIcon from '../assets/icons/project/meal-tracker-50-white.svg';
import MealRecord from '../components/MealRecord';
import DayLogCard from '../components/DayLogCard';
//icons
import AlcoholIcon from '../assets/icons/meal/alcohol-50-black.svg';
import BreakfastIcon from '../assets/icons/meal/breakfast-50-black.svg';
import DinnerIcon from '../assets/icons/meal/dinner-50-black.svg';
import LunchIcon from '../assets/icons/meal/lunch-50-black.svg';
import SnackIcon from '../assets/icons/meal/snack-50-black.svg';
import DrinkIcon from '../assets/icons/meal/drink-50-black.svg';


export default function MealTrackerPage() {
    const [ error, setError ] = useState('');
    const [ emptyFields, setEmptyFields ] = useState('');

    const [meal, setNewMeal ] = useState('')


    function handleSubmit() {
        console.log('Submitting!')
    }
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
                            <form className="meal-form" onSubmit={handleSubmit}>
                                { error && <p className="error-message">Error: {error}</p> }
                                <label className="form-label margin-top-30">Choose a category:</label>
                                <div className="category-choice">
                                    {/* category 1 */}
                                    <button className="category-choice-button">
                                        <img src = { BreakfastIcon } className="icon icon-30" alt="Breakfast category" />
                                    </button>
                                    {/* category 2 */}
                                    <button className="category-choice-button">
                                        <img src = { LunchIcon } className="icon icon-30" alt="Breakfast category" />
                                    </button>
                                    {/* category 3 */}
                                    <button className="category-choice-button">
                                        <img src = { DinnerIcon } className="icon icon-30" alt="Breakfast category" />
                                    </button>
                                    {/* category 4 */}
                                    <button className="category-choice-button">
                                        <img src = { SnackIcon } className="icon icon-30" alt="Breakfast category" />
                                    </button>
                                    {/* category 5 */}
                                    <button className="category-choice-button">
                                        <img src = { DrinkIcon } className="icon icon-30" alt="Breakfast category" />
                                    </button>
                                    {/* category 6 */}
                                    <button className="category-choice-button">
                                        <img src = { AlcoholIcon } className="icon icon-30" alt="Breakfast category" />
                                    </button>
                                </div>
                                <div className="grid-2-2-vert">
                                    <label className="form-label small-p">Add caloric value:</label>
                                    <input 
                                    type="number"
                                    className={emptyFields.includes('email') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setEmail(e.target.value)} 
                                    value={meal.kcal}>
                                    </input>

                                    <label className="form-label">Date:</label>
                                    <input 
                                    type="date"
                                    className={emptyFields.includes('password') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setPassword(e.target.value)} 
                                    value={meal.date}>
                                    </input>
                                </div>
                                <div className="grid-2-3-hor">
                                    <label className="form-label">Protein:</label>
                                    <input 
                                    type="text"
                                    className={emptyFields.includes('password') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setPassword(e.target.value)} 
                                    value={meal.proteins}>
                                    </input>

                                    <label className="form-label">Fats:</label>
                                    <input 
                                    type="text"
                                    className={emptyFields.includes('password') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setPassword(e.target.value)} 
                                    value={meal.fats}>
                                    </input>

                                    <label className="form-label">Carbohydrates:</label>
                                    <input 
                                    type="text"
                                    className={emptyFields.includes('password') ? "error-input form-input" : "form-input"} 
                                    //onChange={(e) => setPassword(e.target.value)} 
                                    value={meal.carbs}>
                                    </input>

                                </div>
                                

                                <input type="submit" className="simple-button" value="Add a new meal"/>
                            </form>
                        </div>    
                    </div>
            </div>
            
        </div>
)
}