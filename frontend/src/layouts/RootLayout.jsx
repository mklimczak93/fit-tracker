//main imports
import React from 'react';
import '../index.css';
import { Outlet } from "react-router-dom";

export default function RootLayout() {
   

    return (
        <div className="root-layout">
                <Outlet />
        </div>
    )
}