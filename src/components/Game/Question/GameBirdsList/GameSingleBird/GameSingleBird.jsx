import React from 'react'
import {connect} from 'react-redux'
import {onAnswerTry} from '../../../../../redux/actions/gameActions/actions'
import classes from './GameSingleBird.module.scss'

function GameSingleBird(props) {
    const {
        content,
        index,
        onAnswerTry,
        gameBirdSelected,
        data,
        gameStage
    } = props;
    const {name} = content;

    let cls = [classes.circle];

    const answerIsRight = data[gameStage][index].rightAnswer && gameBirdSelected === index;
    const answerIsWrong = !data[gameStage][index].rightAnswer && gameBirdSelected === index;

    if (answerIsRight) {
        cls.push(classes.green);
    }

    if (answerIsWrong) {
        cls.push(classes.red);
    }

    return (
        <div
            className={classes.wrapper}
            key={index}
            onClick={(e) => onAnswerTry(e, index)}>
            <div role="button" className={cls.join(' ')}/>
            <div role="button" id={index} className={classes.name}>
                {name}
            </div>
        </div>
    )
}

function mapStateToProps({game, birdsData}) {
    const {
        gameLogic: {
            gameBirdSelected,
            gameStage
        }
    } = game;
    const {data} = birdsData;

    return {gameBirdSelected, data, gameStage}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAnswerTry: (e, index) => dispatch(onAnswerTry(e, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSingleBird)
