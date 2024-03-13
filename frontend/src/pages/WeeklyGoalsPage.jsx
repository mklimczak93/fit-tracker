import React from 'react';
import ImageHeader from '../components/ImageHeader';
import WeeklyGoalsPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import WeeklyGoalsIcon from '../assets/icons/project/weekly-goals-50-white.svg';
import '../index.css';

export default function WeeklyGoalsPage() {
    return(   
        <div className="section weekly-goals">
            <ImageHeader title = "Weekly Goals" photo = { WeeklyGoalsPhoto } icon = { WeeklyGoalsIcon} />
            <div class="under-image">
                <div className="row">
                    <div className="box orange">

                    </div>
                    <div className="box orange">
                        
                    </div>
                    <div className="box orange">
                        
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