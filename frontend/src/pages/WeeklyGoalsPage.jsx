import React from 'react';
import '../index.css';
import ImageHeader from '../components/ImageHeader';
import WeeklyGoalsPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import WeeklyGoalsIcon from '../assets/icons/project/weekly-goals-50-white.svg';
import FTIcon from '../assets/icons/project/FTicon-50-white.svg'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { BarChart } from '@mui/x-charts/BarChart';

export default function WeeklyGoalsPage() {
    const dataset = [
        { in: 2500, out: 2300, day: 'Mon' },
        { in: 2300, out: 2400, day: 'Tue' },
        { in: 3000, out: 2200, day: 'Wed' },
        { in: 2200, out: 1800, day: 'Thu' },
        { in: 2100, out: 2000, day: 'Fri' },
        { in: 2000, out: 2300, day: 'Sat' },
        { in: 1800, out: 2400, day: 'Sun' }
      ];
      const series = [
        { dataKey: 'in', color: '#FD6738' },
        { dataKey: 'out', color: '#E1E1DD' }
      ];
    return(   
        <div className="section weekly-goals">
            <ImageHeader title = "Weekly Goals" photo = { WeeklyGoalsPhoto } icon = { WeeklyGoalsIcon} />
                <div className="row row-1fr">
                    <div className="box orange">
                        <div className="top-justified">
                            <p>calories ingested</p>
                            <img src = { FTIcon } className="icon icon-20" />
                        </div>
                        <div className="bottom-right">
                            <h2>9.000</h2>
                        </div>
                    </div>
                    <div className="box orange">
                    <div className="top-justified">
                            <p>calories burnt</p>
                            <img src = { FTIcon } className="icon icon-20" />
                        </div>
                        <div className="bottom-right">
                            <h2>12.000</h2>
                        </div>
                    </div>
                    <div className="box orange">
                    <div className="top-justified">
                            <p>on track to burn</p>
                            <img src = { FTIcon } className="icon icon-20" />
                        </div>
                        <div className="bottom-right">
                            <h2>0.5 kg</h2>
                        </div>
                    </div>
                </div>

                <div className="row row-3-5fr">
                    <div className="box grow">
                        <h5>Progress Overview</h5>
                        <BarChart
                            series={series}
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'day'}]}
                            leftAxis={null}
                            width={500}
                            height={300}
                            />
                    </div>
                    <div className="box">
                        <DateCalendar />
                    </div>
                </div>

            
        </div>
)
}