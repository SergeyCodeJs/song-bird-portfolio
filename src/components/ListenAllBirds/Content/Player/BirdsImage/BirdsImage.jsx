import React from 'react'
import {connect} from 'react-redux'
import classes from './BirdsImage.module.scss'

function BirdsImage({data, listenAllBirdType, currentBirdIndex}) {
  const birdImage = data[listenAllBirdType][currentBirdIndex].image
  return (
    <img className={classes.image} src={birdImage} alt="bird" />
  )
}

function mapStateToProps({birdsData, game}) {
  const {data} = birdsData;
  const {listenAll} = game;
  const {listenAllBirdType, currentBirdIndex} = listenAll;
  
  return {data, listenAllBirdType, currentBirdIndex}
}

export default connect(mapStateToProps, null)(BirdsImage)