import React from 'react';
import ImageHeader from '../components/ImageHeader';
import ActivityTrackerPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import ActivityTrackerIcon from '../assets/icons/project/activity-tracker-50-white.svg';
import '../index.css';

export default function ActivityTrackerPage() {
    return(   
        <div className="section activity-tracker">
            <ImageHeader title = "Acivity Tracker" photo = { ActivityTrackerPhoto } icon = { ActivityTrackerIcon } />
            <div class="under-image">
                ACTIVITIES
            </div>
            
        </div>
)
}