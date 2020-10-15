import React from 'react'
import classes from './Circle.module.scss'

export default function Circle({gameStage, index}) {
    const {circle, green} = classes;
    const cls = [circle];

    if (gameStage >= index) {
        cls.push(green);
    }
    return (<div className={cls.join(' ')}/>)
}
