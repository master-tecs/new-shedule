import React from 'react'
import Calender from './Calender'
import './Left.css'
import WeekPin from './WeekPin'
import AddIcon from '@material-ui/icons/Add';
import ToysIcon from '@material-ui/icons/Toys';

function left({dark}) {
    return (
        <div className="left">
            <div className="left__top">
                <h3>Weekly Pinned</h3>
                <p>View all</p>
            </div>
            <div className="left__mid">
                {/* container */}
                <WeekPin Icon={ToysIcon} title="The title" date="15 Mar 2020" time="9:00AM" pinned={true} detail="Try to always keep in touch with your family." />
                <WeekPin Icon={ToysIcon} title="The title" date="15 Mar 2020" time="9:00AM" />
                <WeekPin Icon={AddIcon} title="Add weekly pin" />
            </div>
            <div className="left__bottom">
                {/* calender */}
                <Calender dark={dark} />
            </div>
        </div>
    )
}

export default left
