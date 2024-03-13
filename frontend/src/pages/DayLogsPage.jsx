import React from 'react';
import ImageHeader from '../components/ImageHeader';
import DayLogCard from '../components/DayLogCard';
import DayLogsPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import DayLogsIcon from '../assets/icons/project/day-logs-50-white.svg';
import '../index.css';

export default function DayLogsPage() {
    return(   
        <div className="section day-logs">
            <ImageHeader title = "Day Logs" photo = { DayLogsPhoto } icon = { DayLogsIcon } />
            <div class="under-image">
                <div className="row hor-scroll">
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
                <div className="row">
                        <div className="box">

                        </div>
                        <div className="box">
                            
                        </div>
                </div>
                <div className="row">
                        <div className="box">

                        </div>
                        <div className="box">
                            
                        </div>
                </div>
           </div>
        </div>
)
}