import React from 'react'
import {connect} from 'react-redux'

function BirdsDescription({data, listenAllBirdType, currentBirdIndex}) {
    const birdDescription = data[listenAllBirdType][currentBirdIndex].description;

    return (
        <p>{birdDescription}</p>
    )
}

function mapStateToProps({birdsData, game}) {
    const {data} = birdsData;
    const {listenAll} = game;
    const {listenAllBirdType, currentBirdIndex} = listenAll;

    return {data, listenAllBirdType, currentBirdIndex}
}

export default connect(mapStateToProps, null)(BirdsDescription)