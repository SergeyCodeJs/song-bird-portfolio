import React from 'react'
import {connect} from 'react-redux'
import QuestionLayout from './QuestionLayout/QuestionLayout'
import QuestionPlayer from './QuestionPlayer/QuestionPlayer'
import Score from './Score/Score'
import WinModal from '../WinModal/WinModal'

import GameBirdsList from './GameBirdsList/GameBirdsList'

function Question({isGameStarted}) {
    const BirdListElement = isGameStarted
        ? <GameBirdsList/>
        : null;
    const ScoreElement = isGameStarted
        ? <Score/>
        : null;

    return (
        <QuestionLayout>
            <WinModal/>
            <QuestionPlayer/> 
            {BirdListElement}
            {ScoreElement}
        </QuestionLayout>
    )
}

function mapStateToProps({game}) {
    const {gameLogic: {
            isGameStarted
        }} = game;

    return {isGameStarted}
}

export default connect(mapStateToProps, null)(Question)