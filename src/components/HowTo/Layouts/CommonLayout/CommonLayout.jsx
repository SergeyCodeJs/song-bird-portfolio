import React from 'react'
import classes from './CommonLayout.module.scss'

export default function CommonLayout(props) {
    return (
        <div className={classes.content_wrapper}>
            {props.children}
        </div>

    )
}
