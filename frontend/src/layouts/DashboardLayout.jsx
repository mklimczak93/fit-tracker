//main imports
import React from 'react';
import { Outlet } from "react-router-dom";

//css
import '../index.css';

export default function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <Outlet />
        </div>
    )
}