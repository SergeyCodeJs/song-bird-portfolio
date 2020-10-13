import React from 'react'
import {connect} from 'react-redux'
import BirdsList from '../../../BirdsList/BirdsList'
import BirdsDescription from './BirdsDescription/BirdsDescription'
import MusicPlayer from '../../../MusicPlayer/MusicPlayer'
import BirdsImage from './BirdsImage/BirdsImage'

import classes from './ListenAllBirds.module.scss'


function ListenAllBirds(props) {
    const {listenAllBirdType, data, currentBirdIndex} = props;
    const src = data[listenAllBirdType][currentBirdIndex].audio;

    return (
        <div className={classes.birds_player}>
            <BirdsList listType="listenAll"/>
            <div className={classes.description_wrapper}>
                <BirdsDescription/>
                <MusicPlayer src={src} autoPlay={false} loop={false} autoPlayAfterSrcChange={true}/>
            </div>
            <BirdsImage/>
        </div>
    )
}

function mapStateToProps({game, birdsData}) {
    const {listenAll} = game;
    const {data} = birdsData;
    const {listenAllBirdType, currentBirdIndex} = listenAll;
    return {data,listenAllBirdType,currentBirdIndex}
}

export default connect(mapStateToProps, null)(ListenAllBirds)

