import React from 'react';
import ImageHeader from '../components/ImageHeader';
import SettingsPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import SettingsIcon from '../assets/icons/project/settings-50-white.svg';
import '../index.css';

export default function SettingsPage() {
    return(   
        <div className="section settings">
            <ImageHeader title = "Settings" photo = { SettingsPhoto } icon = { SettingsIcon } />
            <div class="under-image">
                Settings
            </div>
            
        </div>
)
}