import React from 'react'
import Doughnnut from './Doughnnut'
// import LineChart from './LineChart'
import Music from './Music'
import "./Right.css"

function Right({dark}) {
    return (
        <div className="right">
            <div className="right__profile">
                <div className="right__profile--left">
                    <p className="right__profile--name">Master_tecs</p>
                    <p className="right__profile--seting">My settings</p>
                </div>
                <div className="right__profile--right">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     alt="" className="right__profile--img"/>
                </div>
            </div>
            {/* music */}
            <Music />
            {/* D-chart */}
            <Doughnnut dark={dark} />
            {/* line chart */}
            {/* <LineChart /> */}
            <div className="right__time"></div>
            <div className="right__qoute"></div>
        </div>
    )
}

export default Right
