import React from 'react'
import classes from './howToLayout.module.scss'

export default function HowToCommonLayout(props) {
    return (
        <div className={classes.content_wrapper}>
            {props.children}
        </div>

    )
}
