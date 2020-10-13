import React from 'react'
import {connect} from 'react-redux'
import WinWindow from './WinWindow/WinWindow'

function WinModal({showWinMessage, gameStage, stagesScore, totalScore, isGameFinished}) {
    const stageScore = stagesScore[gameStage]

    if (showWinMessage && gameStage < 5) {
        return <WinWindow stageScore={stageScore} type="game"/>;
    } else if (showWinMessage && isGameFinished) {
        return <WinWindow totalScore={totalScore}/>
    } else {
        return null
    }
}

function mapStateToProps({game}) {
    const {
        gameLogic: {
            showWinMessage,
            gameStage,
            isGameFinished
        }
    } = game;

    const {
        score: {
            stagesScore,
            totalScore
        }
    } = game;

    return {showWinMessage, gameStage, stagesScore, totalScore, isGameFinished}
}

export default connect(mapStateToProps, null)(WinModal)
