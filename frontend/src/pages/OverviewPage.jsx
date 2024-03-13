import React from 'react';
import '../index.css';
import ImageHeader from '../components/ImageHeader';
import BarGraph from '../components/BarGraph';
//images
import OverviewPhoto from '../assets/project_photos/hero_photos/hero-photo-01.jpg';
import OverviewIcon from '../assets/icons/project/overview-50-white.svg';
import ProjectLogo from '../assets/logos/logo-icon-50.svg';
//placeholders
import CircleGraphPlaceholder from '../assets/placeholders/circle_graph_placeholder.png';
import LineGraphPlaceholder from '../assets/placeholders/line_graph_placeholder.png';

export default function HomePage() {
    console.log(window.innerHeight, window.innerWidth)
    return(   
        <div className="section overview">
            <ImageHeader title = "Overview" photo = { OverviewPhoto } icon = { OverviewIcon }/>
            <div className="under-image">
                <div className="row">
                    <div className="box orange grow">
                        <h2>
                            <img src= { ProjectLogo } className="icon icon-40" />
                            Hi, Neville.
                        </h2>
                        <p>You are on track to reach your goal.</p>
                        <button>Log your progress</button>

                    </div>
                    
                    <div className="box orange">
                        <p>days</p>
                        <h2>134</h2>
                    </div>
                    <div className="box orange">
                        <p>fat burnt</p>
                        <h2>7.500</h2>
                    </div>
                    <div className="box orange">
                        <p>calories burnt</p>
                        <h2>51 600</h2>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="box">
                        <h4>Progress Overview</h4>
                        <img src = { CircleGraphPlaceholder } className="graph circle-graph" />
                        <BarGraph label01 = "134 days in" label02="46 days left" value="75%"/>
                        <BarGraph label01 = "7.5 kg" label02="10kg" value="50%"/>
                        <BarGraph label01 = "160h" label02="200h" value="85%"/>
                    </div>
                    <div className="box grow">
                        <h4>Progress Overview</h4>
                        <img src = { LineGraphPlaceholder } className="graph line-graph" />
                    </div>
                </div>
            </div>
            
        </div>
)
}
