import React from 'react'
import classes from './Number.module.scss'

export default function Number({index, gameStage}) {
    const {number, green} = classes;
    const cls = [number];
    const stageNumber = index + 1;

    if (gameStage >= index) {
        cls.push(green);
    }

    return (
        <div className={cls.join(' ')}>
            {stageNumber}
        </div>
    )
}
