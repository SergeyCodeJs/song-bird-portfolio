import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import getWormsNumber from '../../../../utils/getWormsNumber'
import Worm from './Worm/Worm'
import getArrayWithElements from '../../../../utils/getArrayWithElements'
import getWormName from '../../../../utils/getWormName'
import './Score.scss'

function Score({totalScore, worms}) {
    const wormsArray = getArrayWithElements(getWormsNumber(worms), Worm);

    return (
        <CSSTransition 
        appear={true} 
        in={true} 
        timeout={300} 
        classNames="score-opacity">
            <div className="score_wrapper">
                <p className="score_worms">{`Общий счет: ${totalScore} ${getWormName(totalScore)}`}</p>
                <div>
                    {wormsArray}
                </div>
            </div>
        </CSSTransition>
    )
}

function mapDispatchToProps({game}) {
    const {
        score: {
            totalScore,
            worms
        }
    } = game;
    return {totalScore, worms}
}

export default connect(mapDispatchToProps, null)(Score)