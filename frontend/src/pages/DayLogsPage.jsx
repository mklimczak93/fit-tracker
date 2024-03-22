import React from 'react';
import '../index.css';
import ImageHeader from '../components/ImageHeader';
import DayLogCard from '../components/DayLogCard';
import DayLogsPhoto from '../assets/project_photos/hero_photos/hero-photo-04.jpg';
import DayLogsIcon from '../assets/icons/project/day-logs-50-white.svg';
import { PieChart } from '@mui/x-charts/PieChart';
import MealRecord from '../components/MealRecord';
//icons
import AlcoholIcon from '../assets/icons/meal/alcohol-50-black.svg';
import BreakfastIcon from '../assets/icons/meal/breakfast-50-black.svg';
import DinnerIcon from '../assets/icons/meal/dinner-50-black.svg';
import LunchIcon from '../assets/icons/meal/lunch-50-black.svg';
import SnackIcon from '../assets/icons/meal/snack-50-black.svg';
import ActivityRecord from '../components/ActivityRecord';

export default function DayLogsPage() {
    return(   
        <div className="section day-logs">
            <ImageHeader title = "Day Logs" photo = { DayLogsPhoto } icon = { DayLogsIcon } />
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
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />
                <DayLogCard date="02/03" value="70%" kcal="300" />

            </div>
            <div className="row row-1fr">
                    <div className="box pie-chart-box">
                        <div className="pie-chart-text">
                            <h4>400</h4>
                            <p className="grey-text">kcal left</p>
                        </div>
                        <PieChart
                            colors={['#FD6738', '#BDBCBA']}
                            series={[
                                {data: [
                                    { id: 0, value: 80 },
                                    { id: 1, value: 20 }
                                ],
                                innerRadius: 30,
                                outerRadius: 40,
                                cx: 40,
                                cy: 40,
                                },
                            ]}
                            width={80}
                            height={80}
                            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            slotProps={{ legend: { hidden: true, position: {vertical: 'middle', horizontal: 'middle'}, } }}
                        />
                    </div>
                    
                    <div className="box grow relative">
                        <p style={{maxWidth: '80px'}}>Calories ingested today</p>
                        <div className="bottom-right-corner">
                            <p className="grey-text">out of 2000 limit</p>
                            <h2>1600</h2>
                        </div>
                    </div>
                    <div className="box pie-chart-box">
                        <div className="pie-chart-text">
                            <h4>600</h4>
                            <p className="grey-text">kcal burnt</p>
                        </div>
                        <PieChart
                            colors={['#FD6738', '#BDBCBA']}
                            series={[
                                {data: [
                                    { id: 0, value: 80 },
                                    { id: 1, value: 20 }
                                ],
                                innerRadius: 30,
                                outerRadius: 40,
                                cx: 40,
                                cy: 40,
                                },
                            ]}
                            width={80}
                            height={80}
                            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                            slotProps={{ legend: { hidden: true, position: {vertical: 'middle', horizontal: 'middle'}, } }}
                        />
                    </div>
                    <div className="box grow relative">
                        <p style={{maxWidth: '80px'}}>Calories burnt today</p>
                        <div className="bottom-right-corner">
                            <p className="grey-text">out of 600 goal</p>
                            <h2>600</h2>
                        </div>
                    </div>
            </div>
            <div className="row row-2-5fr-10">
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
                        <h5>Kcal burnt</h5>
                        <div className="vert-scroll">
                            <ActivityRecord icon={DinnerIcon} activityName="Swimming" duration="60 min" calories="700"/>
                            <ActivityRecord icon={DinnerIcon} activityName="Tennis" duration="75 min" calories="600"/>
                            <ActivityRecord icon={DinnerIcon} activityName="Running" duration="40 min" calories="500"/>
                        </div>    
                    </div>
            </div>

        </div>
)
}