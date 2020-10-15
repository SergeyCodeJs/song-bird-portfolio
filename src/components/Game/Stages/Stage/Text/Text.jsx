import React from 'react'
import classes from './Text.module.scss'

export default function Text({text, index, gameStage}) {
    const {text_name, green} = classes;
    const cls = [text_name];

    if (gameStage === index) {
        cls.push(green);
    }
    return (
        <div className={cls.join(' ')}>
            {text}
        </div>
    )
}
