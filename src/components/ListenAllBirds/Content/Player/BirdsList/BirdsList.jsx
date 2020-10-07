import React from 'react'
import classes from './BirdsList.module.scss'
import SingleBird from './SingleBird/SingleBird'
import {renderData} from '../../../../../utils/renderData'
import data from '../../../../../assets/data/birds'

export default function BirdsList() {
    const birdsElements = renderData(data[0], SingleBird);
    
    return (
        <div className={classes.container}>
            {birdsElements}
        </div>
    )
}
