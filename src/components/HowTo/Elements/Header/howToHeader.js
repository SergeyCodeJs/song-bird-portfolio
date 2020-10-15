import React from 'react'
import classes from './howToHeader.module.scss'

export default function HowToHeader({content}) {
    const {header} = classes;

    return (
        <h2 className={header}>{content}</h2>
    )
}
