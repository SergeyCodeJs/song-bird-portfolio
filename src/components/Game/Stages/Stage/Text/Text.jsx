import React from 'react'
import classes from './Text.module.scss'

export default function Text({text}) {
    return (
        <div className={classes.text_name}>
            {text}
        </div>
    )
}
