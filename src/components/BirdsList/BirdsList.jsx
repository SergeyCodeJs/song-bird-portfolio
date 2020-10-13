import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import './BirdsList.scss'
import SingleBird from './SingleBird/SingleBird'
import {renderData} from '../../utils/renderData'

function BirdsList({data, listenAllBirdType, listType, gameStage}) {
    let birdsElements;

    if (listType === 'listenAll') {
        birdsElements = renderData(data[listenAllBirdType], SingleBird);
    } else {
        birdsElements = renderData(data[gameStage], SingleBird, {type: listType});
    }

    return (
        <CSSTransition appear={true} in={true} timeout={300}classNames="birds-list-opacity">
            <div className="birds-list-container">
                {birdsElements}
            </div>
        </CSSTransition>
    )
}

function mapStateToProps({birdsData, game}) {
    const {data} = birdsData;
    const {listenAll, gameLogic} = game;
    const {listenAllBirdType} = listenAll;
    const {gameStage} = gameLogic;

    return {data, listenAllBirdType, gameStage}
}

export default connect(mapStateToProps, null)(BirdsList)