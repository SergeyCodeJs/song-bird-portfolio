import React from 'react'
import {render} from 'react-dom';
import classes from './BirdTypes.module.scss'

const birdTypes = [
    'Разные',
    'Воробьи',
    'Лесные',
    'Певчие',
    'Хищные',
    'Морские'
];

let stage = 0;

export default function BirdTypes() {
    return (
        <div className={classes.birds_stages}>
            {birdTypes.map((type, index) => renderBirdTypes(type, index))}
        </div>
    )
}

function renderBirdTypes(type, index) {
    const cls = [classes.birds_stages__button];

    if (stage === index) {
        cls.push(classes.birds_stages__button_active);
    }

    return (
        <div key={index} role="button" onClick={null} className={cls.join(' ')}>
            <p>{type}</p>
        </div>
    );
}