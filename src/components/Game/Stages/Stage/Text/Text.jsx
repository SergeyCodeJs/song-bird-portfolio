import React from 'react'
import classes from './Text.module.scss'

export default function Text({text, index, gameStage}) {
    const cls = [classes.text_name];
    if (gameStage === index) {
        cls.push(classes.green);
    }
    return (
        <div className={cls.join(' ')}>
            {text}
        </div>
    )
}
