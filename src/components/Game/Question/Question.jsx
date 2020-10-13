import React from 'react'
import {connect} from 'react-redux'
import QuestionLayout from './QuestionLayout/QuestionLayout'
import QuestionPlayer from './QuestionPlayer/QuestionPlayer'
import Score from './Score/Score'
import WinModal from '../WinModal/WinModal'

import BirdsList from '../../BirdsList/BirdsList'

function Question({isGameStarted}) {
  return (
    <QuestionLayout>
      <WinModal/>
      <QuestionPlayer/>
      {isGameStarted ? <BirdsList/> : null}
      {isGameStarted ? <Score/> : null}
    </QuestionLayout>
  )
}

function mapStateToProps({game}) {
  const {gameLogic} = game;
  const {isGameStarted} = gameLogic;

  return {isGameStarted}
}

export default connect(mapStateToProps, null)(Question)