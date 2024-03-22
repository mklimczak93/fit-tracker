import React from 'react';
import { Outlet } from "react-router-dom";
import '../index.css';

export default function SectionLayout() {
    return (
        <div className="section-layout">
            <Outlet />
        </div>
    )
}