//main imports
import React from 'react';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { NavLink, Outlet } from "react-router-dom";
//images
//project icons
import DefaultPhoto from "../assets/project_photos/default_profile.png";
import OverviewIcon from '../assets/icons/project/overview-50-black.svg';
import WeeklyGoalsIcon from '../assets/icons/project/weekly-goals-50-black.svg';
import DayLogsIcon from '../assets/icons/project/day-logs-50-black.svg';
import MealTrackerIcon from '../assets/icons/project/meal-tracker-50-black.svg';
import ActivityTrackerIcon from '../assets/icons/project/activity-tracker-50-black.svg';
import SettingsIcon from '../assets/icons/project/settings-50-black.svg';
import LogOutIcon from '../assets/icons/project/log-out-50-black.svg';
//social media icons
import InstagramIcon from '../assets/icons/social/instagram-50-black.svg';
import TikTokIcon from '../assets/icons/social/tiktok-50-black.svg';
import FacebookIcon from '../assets/icons/social/facebook-50-black.svg';
//css
import '../index.css';


export default function RootLayout() {
    const { user } = useAuthContext();
    const [ openMenu, SetOpenMenu ] = useState('false');

    function openSmallMenu() {
        let menuToBeOpened = null;
        if (user) {
            menuToBeOpened = document.getElementById('navbar-links-loggedin')
        } else {
            menuToBeOpened = document.getElementById('navbar-links-loggedout')
        }
        
        if (openMenu === 'false') {
            menuToBeOpened.style.display='flex';
            SetOpenMenu('true');
        } else {
            menuToBeOpened.style.display='none';
            SetOpenMenu('false');
        }
    }

    //logging out logic
    const { logout } = useLogout();
    function handleClick() {
        logout();
    }



    return (
        <div className="root-layout">
            <div className="box main-side-menu">
                <div className="mini-profile">
                    <img src = { DefaultPhoto } className="profile-photo" alt="Default mock user"/>
                    <h3>Neville Longbottom</h3>
                    <p>n.longbottom@mail.com</p>

                </div>
                <div className="menu-options">
                    <NavLink to="/overview" className={ ({isActive}) => ( isActive ? "link side-menu-link selected" : "link side-menu-link")} >
                        <img src = { OverviewIcon } className="icon icon-10"/>
                        <h4>Overview</h4>
                    </NavLink>
                    <NavLink to="/weekly-goals" className={ ({isActive}) => ( isActive ? "link side-menu-link selected" : "link side-menu-link")} >
                        <img src = { WeeklyGoalsIcon } className="icon icon-10" />
                        <h4>Weekly Goals</h4>
                    </NavLink>
                    <NavLink to="/day-logs" className={ ({isActive}) => ( isActive ? "link side-menu-link selected" : "link side-menu-link")} >
                        <img src = { DayLogsIcon } className="icon icon-10" />
                        <h4>Day Logs</h4>
                    </NavLink>
                    <NavLink to="/meal-tracker" className={ ({isActive}) => ( isActive ? "link side-menu-link selected" : "link side-menu-link")} >
                        <img src = { MealTrackerIcon } className="icon icon-10" />
                        <h4>Meal Tracker</h4>
                    </NavLink>
                    <NavLink to="/activity-tracker" className={ ({isActive}) => ( isActive ? "link side-menu-link selected" : "link side-menu-link")} >
                        <img src = { ActivityTrackerIcon } className="icon icon-10" />
                        <h4>Activity Tracker</h4>
                    </NavLink>
                    <NavLink to="/settings" className={ ({isActive}) => ( isActive ? "link side-menu-link selected" : "link side-menu-link")} >
                        <img src = { SettingsIcon } className="icon icon-10" />
                        <h4>Settings</h4>
                    </NavLink>      
                    <div className="side-menu-link-div" onClick={handleClick}>
                        <img src = { LogOutIcon } className="icon icon-10" />
                        <h4>Log Out</h4>
                    </div>
                </div>
                <div className="social-media-links">
                    <a href="https://www.instagram.com/" className="link social-media-link" target="_blank" rel="noreferrer">
                        <img src = { InstagramIcon } className="icon icon-20" />
                    </a>
                    <a href="https://www.tiktok.com/" className="link social-media-link" target="_blank" rel="noreferrer">
                        <img src = { TikTokIcon } className="icon icon-20" />
                    </a>
                    <a href="https://www.facebook.com/" className="link social-media-link" target="_blank" rel="noreferrer">
                        <img src = { FacebookIcon } className="icon icon-20" />
                    </a>
                </div>
                <div className="copyright-text-div">
                    <p className="app-name">Fit.Tracker © 2024</p>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}