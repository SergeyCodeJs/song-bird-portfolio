import React from 'react'
import {connect} from 'react-redux'
import ListenAllBirdsList from './ListenAllBirdsList/ListenAllBirdsList'
import BirdsDescription from './BirdsDescription/BirdsDescription'
import MusicPlayer from '../../../MusicPlayer/MusicPlayer'
import BirdsImage from './BirdsImage/BirdsImage'

import classes from './ListenAllBirds.module.scss'

function ListenAllBirds({data, listenAllBirdType, currentBirdIndex}) {
    const {birds_player, content_wrapper, description_wrapper} = classes;
    const src = data[listenAllBirdType][currentBirdIndex].audio;

    return (
        <div className={birds_player}>
            <div className={content_wrapper}>
                <ListenAllBirdsList/>
                <div className={description_wrapper}>
                    <BirdsDescription/>
                    <MusicPlayer
                        src={src}
                        autoPlay={false}
                        loop={false}
                        autoPlayAfterSrcChange={true}/>
                </div>
            </div>
            <BirdsImage/>
        </div>
    )
}

function mapStateToProps({game, birdsData}) {
    const {data} = birdsData;
    const {
        listenAll: {
            listenAllBirdType,
            currentBirdIndex
        }
    } = game;

    return {data, listenAllBirdType, currentBirdIndex}
}

export default connect(mapStateToProps, null)(ListenAllBirds)
