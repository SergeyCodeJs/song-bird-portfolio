import React from 'react'
import classes from './ButtonArrow.module.scss'

export default function ButtonArrow({isInterfaceOpen}) {
    const {arrow_top, rotate} = classes;
    let cls = [arrow_top];

    if (isInterfaceOpen) {
        cls.push(rotate);
    }

    return <div className={cls.join(' ')}/>
}
