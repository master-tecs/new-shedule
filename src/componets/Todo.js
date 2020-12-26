import React from 'react'
import './Todo.css'

function Todo({Icon, title, startTime, endTime, done, detail}) {
    return (
        <div className={ done ? "todoDone" : "todo"}>
            <div className={ done ? "todoDone__icon" : "todo__icon"}>
                <Icon />
            </div>
            <div className="todo__detail">
                <div className="todo__detail--top">
                    <div className="todo__detail--title"><p>{title}</p></div>
                    <div className="todo__detail--dateTime">
                        <p>{startTime}</p>
                        <p>{endTime}</p>
                    </div>
                </div>
                <p className="todo__detail--discibtion"><p>{detail}</p></p>
            </div>
        </div>
    )
}

export default Todo
