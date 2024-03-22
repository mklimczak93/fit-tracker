import React, { useEffect, useState } from "react";
import '../index.css';

export default function ToggleButton() {
    const [ darkMode, setDarkMode ] = useState(false);
        //toggling Dark Mode
        function toggleDarkMode() {
            if (darkMode === false) {
                setDarkMode(true);
            } else {
                setDarkMode(false);
            };
            console.log(darkMode)
        }
        useEffect(()=> {
            if (darkMode === true) {
                document.querySelector('body').setAttribute('data-theme', 'dark');
            } else {
                document.querySelector('body').setAttribute('data-theme', 'light');
            }
        },[darkMode])
    
    return (
        <div className="toggle-button" onClick={ toggleDarkMode } >
            <div className={ darkMode ? "toggle-button-circle darkModeCircle" : "toggle-button-circle lightModeCircle"}></div>
        </div>
    )
}