import React from 'react'
import './WeekPin.css'

function WeekPin({Icon, title, date, time, pinned, detail}) {
    return (
        <div className="weekPin">
            <div className="weekPin__icon">
                <Icon className="weekPin__icon--add" />
            </div>
            <div className="weekPin__detail">
                <div className="weekPin__detail--title"><p>{title}</p></div>
                <div className="weekPin__detail--dateTime"><p>{date} {date && time? "-" : "" } {time}</p></div>
                {
                    pinned ? <div className="weekPin__detail--pin"><p>Pinned</p></div>
                    : ""
                }
                <p className="weekPin__detail--discibtion"><p>{detail}</p></p>
            </div>
        </div>
    )
}

export default WeekPin
