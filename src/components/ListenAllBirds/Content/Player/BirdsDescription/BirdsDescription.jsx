import React from 'react'
import {connect} from 'react-redux'
import classes from './BigdsDescription.module.scss'

function BirdsDescription({data, listenAllBirdType, currentBirdIndex}) {
    const {text} = classes;
    const birdDescription = data[listenAllBirdType][currentBirdIndex].description;

    return (
        <p className={text}>{birdDescription}</p>
    )
}

function mapStateToProps({birdsData, game}) {
    const {data} = birdsData;
    const {
        listenAll: {
            listenAllBirdType,
            currentBirdIndex
        }
    } = game;

    return {data, listenAllBirdType, currentBirdIndex}
}

export default connect(mapStateToProps, null)(BirdsDescription)