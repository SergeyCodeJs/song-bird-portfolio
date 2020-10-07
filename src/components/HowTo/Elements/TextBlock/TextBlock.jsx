import React from 'react'
import classes from './TextBlock.module.scss'

export default function TextBlock({content}) {
    return (
        <p className={classes.textContent}>{content}</p>
    )
}
