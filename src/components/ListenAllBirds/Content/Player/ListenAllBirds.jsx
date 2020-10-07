import React from 'react'
import BirdsList from './BirdsList/BirdsList'
import BirdsDescription from './BirdsDescription/BirdsDescription'
import MusicPlayer from './MusicPlayer/MusicPlayer'
import BirdsImage from './BirdsImage/BirdsImage'

import classes from './ListenAllBirds.module.scss'


export default function ListenAllBirds() {
    return (
        <div className={classes.birds_player}>
            <BirdsList/>
            <div className={classes.description_wrapper}>
                <BirdsDescription/>
                <MusicPlayer/>
            </div>
            <BirdsImage/>
        </div>
    )
}
