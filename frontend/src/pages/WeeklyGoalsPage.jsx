import React from 'react';
import '../index.css';
import ImageHeader from '../components/ImageHeader';
import WeeklyGoalsPhoto from '../assets/project_photos/hero_photos/hero-photo-03.jpg';
import WeeklyGoalsIcon from '../assets/icons/project/weekly-goals-50-white.svg';
import FTIcon from '../assets/icons/project/FTicon-50-white.svg'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartsReferenceLine } from '@mui/x-charts';

export default function WeeklyGoalsPage() {
    const accentColor01 = '#FD6738';
    const accentColor02 = '#E1E1DD';
    const dataset = [
        { delta: 200, calories: -2300, day: 'Tue' },
        { delta: -100, calories: -2200, day: 'Wed' },
        { delta: 800, calories:  -2200, day: 'Thu' },
        { delta: -400, calories: -1800, day: 'Fri' },
        { delta: 100, calories: -2000, day: 'Sun' },
        { delta: -300, calories: -1700, day: 'Sat' },
        { delta: -600, calories: -1200, day: 'Mon' },
      ];
      const series = [
        { dataKey: 'delta', color: accentColor01, stack: 'total' },
        { dataKey: 'calories', color: accentColor02, stack: 'total' }
      ];

    return(   
        <div className="section weekly-goals">
            <ImageHeader title = "Weekly Goals" photo = { WeeklyGoalsPhoto } icon = { WeeklyGoalsIcon} />
                <div className="row row-1fr">
                    <div className="box orange relative">
                        <div className="top-justified">
                            <p>calories ingested</p>
                            <img src = { FTIcon } className="icon icon-20" />
                        </div>
                        <div className="bottom-right-corner">
                            <h2>9.000</h2>
                        </div>
                    </div>
                    <div className="box orange relative">
                        <div className="top-justified">
                            <p>calories burnt</p>
                            <img src = { FTIcon } className="icon icon-20" />
                        </div>
                        <div className="bottom-right-corner">
                            <h2>12.000</h2>
                        </div>
                    </div>
                    <div className="box orange relative">
                        <div className="top-justified">
                            <p>on track to burn</p>
                            <img src = { FTIcon } className="icon icon-20" />
                        </div>
                        
                        <div className="bottom-right-corner">
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
                            width={450}
                            height={300}

                            xAxis={[
                                { scaleType: 'band', dataKey: 'day'} 
                        ]}
                            leftAxis={null}
                            margin={{ top: 50, bottom: 50, left: 40, right: 40 }}
                            slotProps={{
                                bar: {
                                  rx: 3,
                                  ry: 3,
                                },
                              }}
                            //  @mui-charts v.07 grid={{ horizontal: true }}
                              
                            />
                    </div>
                    <div className="box">
                        <DateCalendar 
                        slotProps={{
                            day: {
                              sx: {
                                '&.MuiPickersDay-root.Mui-selected': {
                                  backgroundColor: accentColor01,
                                },
                                '&:hover': {
                                    padding: '5px'
                                    
                                }
                              },
                            },
                            desktopPaper: {
                                sx: {
                                  '.MuiPickersYear-yearButton.Mui-selected':{
                                    backgroundColor:  accentColor01,
                                  }
                                }
                              },
                        }}
                        />
                    </div>
                </div>

            
        </div>
)
}