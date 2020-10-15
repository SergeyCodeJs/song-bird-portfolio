import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import './GameBirdsList.scss'
import GameSingleBird from './GameSingleBird/GameSingleBird'
import {renderData} from '../../../../utils/renderData'

function GameBirdsList({data, gameStage}) {
    const birdsElements = renderData(data[gameStage], GameSingleBird);
    
    return (
        <CSSTransition appear={true} in={true} timeout={300}classNames="birds-list-opacity">
            <div className="game-birds-list-container">
                {birdsElements}
            </div>
        </CSSTransition>
    )
}

function mapStateToProps({birdsData, game}) {
    const {data} = birdsData;
    const {gameLogic: {gameStage}} = game;

    return {data, gameStage}
}

export default connect(mapStateToProps, null)(GameBirdsList)