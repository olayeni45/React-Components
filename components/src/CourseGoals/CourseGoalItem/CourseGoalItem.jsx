import React from 'react'
import './CourseGoalItem.css'

const CourseGoalItem = (props)=> {
    const {children} = props

    return(
        <li className='goal-item'>{children}</li>
    )
}

export default CourseGoalItem;