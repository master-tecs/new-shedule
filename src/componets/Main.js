import React from 'react'
import "./Main.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddIcon from '@material-ui/icons/Add';
import Todo from './Todo';
import ToysIcon from '@material-ui/icons/Toys';

function Main() {
    return (
        <div className="main">
            <div className="main__top">
                <div className="main__top--left">
                    <div className="main__top--left--top"><p>Today's schedule</p></div>
                    <div className="main__top--left--bottom">
                        <div className="main__top--left--bottom__left"><p>Thursday 11</p></div>
                        <div className="main__top--left--bottom__right">
                            <div className="main__top--leftIcon">
                                <ArrowBackIcon />
                            </div>
                            <div className="main__top--leftIcon">
                                <ArrowForwardIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__top--right">
                    <div className="main__top--rightAdd">
                        <AddIcon />
                    </div>
                </div>
            </div>
            <div className="main__todos">
                <Todo Icon={ToysIcon} title="Code" done startTime="7:00AM" endTime="8:00AM" detail="Try to always keep in touch with your family." />
                <Todo Icon={ToysIcon} title="Go to Gym" done startTime="8:00AM"  endTime="10:00AM" />
                <Todo Icon={ToysIcon} title="Call Family" done startTime="10:00AM" detail="Try to always keep in touch with your family." />
                <Todo Icon={ToysIcon} title="Finish Project"  startTime="11:00AM" detail="Try to always keep in touch with your family." />
                <Todo Icon={ToysIcon} title="See Doctor"  startTime="2:00PM" />
                <Todo Icon={ToysIcon} title="Chat With Freinds" startTime="4:00PM" />
                <Todo Icon={ToysIcon} title="Meditate"  startTime="5:00PM" />
                <Todo Icon={ToysIcon} title="Read"  startTime="6:00PM" />
                <Todo Icon={ToysIcon} title="Do Assignment"  startTime="9:00PM" />
                <Todo Icon={ToysIcon} title="Learn New Stuff" done startTime="10:00PM" />
            </div>
        </div>
    )
}

export default Main
