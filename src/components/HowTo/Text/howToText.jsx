import React from 'react'
import classes from './howToText.module.scss'

export default function HowToText({content}) {
    return (
        <p className={classes.textContent}>{content}</p>
    )
}
