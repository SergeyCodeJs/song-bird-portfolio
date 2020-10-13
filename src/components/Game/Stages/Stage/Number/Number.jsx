import React from 'react'
import classes from './Number.module.scss'

export default function Number({index, gameStage}) {
    const cls = [classes.number];
    if (gameStage >= index) {
        cls.push(classes.green);
    }

    return (
        <div className={cls.join(' ')}>
            {index + 1}
        </div>
    )
}
