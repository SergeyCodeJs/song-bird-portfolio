import React from 'react'
import BirdType from './BirdType/BirdType'
import getStageName from '../../../../utils/getStageName'
import classes from './BirdTypes.module.scss'

export default function BirdTypes() {
    const {birds_types} = classes;
    const birdTypesArray = getStageName();

    return (
        <div className={birds_types}>
            {birdTypesArray.map((type, index) => <BirdType key={index} type={type} index={index}/>)}
        </div>
    )
}