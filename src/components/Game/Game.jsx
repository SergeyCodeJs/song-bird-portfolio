import React, {Fragment} from 'react'
import Stages from './Stages/Stages'
import Question from './Question/Question'

export default function Game() {
    return (
        <Fragment>
            <Stages/>
            <Question/>
        </Fragment>
    )
}
