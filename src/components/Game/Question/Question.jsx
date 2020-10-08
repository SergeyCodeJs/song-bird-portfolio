import React from 'react'
import QuestionLayout from './QuestionLayout/QuestionLayout'
import QuestionPlayer from './QuestionPlayer/QuestionPlayer'
import Score from './Score/Score'

import BirdsList from '../../BirdsList/BirdsList'

export default function Question() {
  return (
    <QuestionLayout>
      <QuestionPlayer/>
      <BirdsList/>
      <Score/>
    </QuestionLayout>
  )
}
