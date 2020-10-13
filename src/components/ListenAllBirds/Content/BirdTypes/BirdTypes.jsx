import React from 'react'
import BirdType from './BirdType/BirdType'
import classes from './BirdTypes.module.scss'

const birdTypes = [
    'Разные',
    'Воробьи',
    'Лесные',
    'Певчие',
    'Хищные',
    'Морские'
];

export default function BirdTypes() {
    
    return (
        <div className={classes.birds_stages}>
            {birdTypes.map((type, index) => <BirdType key={index} type={type} index={index}/>)}
        </div>
    )
}