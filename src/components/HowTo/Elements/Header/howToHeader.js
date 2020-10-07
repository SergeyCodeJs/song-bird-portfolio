import React from 'react'
import classes from './howToHeader.module.scss'

export default function HowToHeader({content}) {
    return (
        <h2 className={classes.header}>{content}</h2>
    )
}
