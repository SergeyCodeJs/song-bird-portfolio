import React from 'react'
import classes from './BirdsDescription.module.scss'
import data from '../../../../../assets/data/birds'

export default function BirdsDescription() {
  const birdDescription = data[0][0].description;
  
    return (
            <p>{birdDescription}</p>
    )
}
