import React from 'react'
import classes from './ButtonArrow.module.scss'

export default function ButtonArrow({isInterfaceOpen}) {
    let cls = [classes.arrow_top];

    if (isInterfaceOpen) {
        cls = [classes.arrow_top, classes.rotate]
    }

    return <div className={cls.join(' ')}/>
}
