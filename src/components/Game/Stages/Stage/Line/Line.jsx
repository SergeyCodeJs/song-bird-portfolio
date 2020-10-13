import React from 'react'
import classes from './Line.module.scss'

export default function Line({gameStage, index}) {
    const cls = [classes.line, classes.gray];

    if (gameStage > index) {
        cls.push(classes.green);
    }

    return (<div className={cls.join(' ')}/>)
}
