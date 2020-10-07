import React from 'react'
import classes from './BirdsImage.module.scss'
import data from '../../../../../assets/data/birds'

export default function BirdsImage() {
  const birdImage = data[0][0].image
  return (
    <img className={classes.image} src={birdImage} alt="bird" />
  )
}
