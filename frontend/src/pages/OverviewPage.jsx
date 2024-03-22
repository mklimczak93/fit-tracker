import React from 'react';
import '../index.css';
import ImageHeader from '../components/ImageHeader';
import BarGraph from '../components/BarGraph';
//images
import OverviewPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import OverviewIcon from '../assets/icons/project/overview-50-white.svg';
import ProjectLogo from '../assets/logos/logo-icon-50.svg';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';


export default function HomePage() {
    const dataset = [
        { in: 2500, out: 2300, month: 'Jan' },
        { in: 2300, out: 2400, month: 'Feb' },
        { in: 2700, out: 2200, month: 'Mar' },
        { in: 2200, out: 1800, month: 'Apr' },
        { in: 2100, out: 2000, month: 'Mai' },
        { in: 2000, out: 2300, month: 'Jun' },
        { in: 1800, out: 2400, month: 'Jul' },
        { in: 1700, out: 2500, month: 'Aug' },
        { in: 2000, out: 2200, month: 'Sept' },
        { in: 2100, out: 2500, month: 'Oct' },
        { in: 2100, out: 2600, month: 'Nov' },
        { in: 2000, out: 2500, month: 'Dec' },
      ];
      const series = [
        { type: 'line', dataKey: 'in', color: '#FD6738' },
        { type: 'line', dataKey: 'out', color: '#000000' }
      ];
      
      
    return(   
        <div className="section overview">
            <ImageHeader title = "Overview" photo = { OverviewPhoto } icon = { OverviewIcon }/>

            <div className="row row-1-5fr">
                <div className="box orange grow welcome-sign">
                    <h2>
                        <img src= { ProjectLogo } className="icon icon-40" />
                        Hi, Neville.
                    </h2>
                    <p>You are on track to reach your goal.</p>
                    <button>Log your progress</button>

                </div>
                <div className="column overview-numbers-column">
                    <div className="box orange long small-padding">
                        <p>days</p>
                        <h2 className="overview-numbers">134</h2>
                    </div>
                    <div className="box orange long small-padding">
                        <p>fat burnt</p>
                        <h2 className="overview-numbers">7.500</h2>
                    </div>
                    <div className="box orange long small-padding">
                        <p>calories burnt</p>
                        <h2 className="overview-numbers">51 600</h2>
                    </div>
                </div>
                
                
            </div>

            <div className="row row-3fr">
                <div className="box">
                    <h4>Progress Overview</h4>
                    <div className="pie-chart-box">
                        <div className="pie-chart-text">
                            <h4>75%</h4>
                            <p className="grey-text">goal achieved</p>
                        </div>
                        <PieChart
                            colors={['#FD6738', '#BDBCBA']}
                            series={[
                                {data: [
                                    { id: 0, value: 75 },
                                    { id: 1, value: 25 }
                                ],
                                innerRadius: 45,
                                outerRadius: 55,
                                cx: 95,
                                cy: 55,
                                },
                            ]}
                            width={200}
                            height={120}
                            
                            slotProps={{ legend: { hidden: true, position: {vertical: 'middle', horizontal: 'middle'}, } }}
                        />

                    </div>
                    <BarGraph label01 = "134 days in" label02="46 days left" value="75%"/>
                    <BarGraph label01 = "7.5 kg" label02="10kg" value="50%"/>
                    <BarGraph label01 = "160h" label02="200h" value="85%"/>
                </div>
                <div className="box grow">
                    <h4>Progress Overview</h4>
                    <LineChart
                        series={series}
                        xAxis={[
                          {
                            scaleType: 'band',
                            dataKey: 'month'
                          },
                        ]}
                        leftAxis={null}
                        dataset={dataset}
                        width={550}
                        height={300}
                        margin={{ top: 30, bottom: 30, left: 0, right: 0 }}
                        />
                </div>
            </div>

            
        </div>
)
}
