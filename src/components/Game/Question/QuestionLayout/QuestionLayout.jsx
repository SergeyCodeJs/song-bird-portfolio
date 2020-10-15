import React from 'react'
import classes from './QuestionLayout.module.scss'

export default function QuestionLayout(props) {
    const {question, question_wrapper} = classes;

    return (
        <div className={question}>
            <div className={question_wrapper}>
                {props.children}
            </div>
        </div>
    )
}
