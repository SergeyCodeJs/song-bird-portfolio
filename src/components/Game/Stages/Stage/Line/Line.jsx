import React from 'react'
import classes from './Line.module.scss'

export default function Line({gameStage, index}) {
    const {line, gray, green} = classes;
    const cls = [line, gray];

    if (gameStage > index) {
        cls.push(green);
    }

    return (<div className={cls.join(' ')}/>)
}
