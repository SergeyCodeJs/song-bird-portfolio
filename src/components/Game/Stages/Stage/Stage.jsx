import React from 'react'
import {connect} from 'react-redux'
import Number from './Number/Number'
import Text from './Text/Text'
import Line from './Line/Line'
import Circle from './Circle/Circle'

import classes from './Stage.module.scss'

function Stage({gameStage, index, content}) {
    

    return (
        <div className={classes.wrapper} key={index}>
            <div className={classes.number_wrapper}>
                <Number gameStage={gameStage} index={index}/>
                <Text index={index} gameStage={gameStage} text={content}/>
            </div>
            <div className={classes.step_wrapper}>
                <Circle index={index} gameStage={gameStage}/>
                <Line index={index} gameStage={gameStage}/>
            </div>
        </div>
    )
}

function mapDispatchToProps({game}) {
    const {gameLogic: {
            gameStage
        }} = game;
    return {gameStage}
}

export default connect(mapDispatchToProps, null)(Stage)