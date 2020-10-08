import React from 'react'
import classes from './QuestionLayout.module.scss'

export default function QuestionLayout(props) {
    return (
        <div className={classes.question}>
            <div className={classes.question_wrapper}>
                {props.children}
            </div>
        </div>
    )
}
