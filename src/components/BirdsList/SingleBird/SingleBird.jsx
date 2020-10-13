import React from 'react'
import {connect} from 'react-redux'
import {changeListenAllBirdIndex} from '../../../redux/actions/listenAllActions/actions'
import {changeGameBirdIndex, onAnswerTry} from '../../../redux/actions/gameActions/actions'
import classes from './SingleBird.module.scss'

function SingleBird(props) {
    const {
        content,
        index,
        options,
        changeListenAllBirdIndex,
        onAnswerTry,
        currentBirdIndex,
        gameBirdSelected,
        data,
        gameStage
    } = props;
    const {name} = content;

    const contentType = options ? "game" : "listenAll";
    let cls = [classes.circle];
    let onBirdClick;

    if (contentType === "listenAll") {
        onBirdClick = (e, index) => changeListenAllBirdIndex(e, index);
    
        if (currentBirdIndex === index) {
            cls.push(classes.green);
        }
    }
    
    if (contentType === "game") {
        const answerIsRight = data[gameStage][index].rightAnswer && gameBirdSelected === index;
        const answerIsWrong = !data[gameStage][index].rightAnswer && gameBirdSelected === index;
        onBirdClick = (e, index) => onAnswerTry(e, index);

        if (answerIsRight) {
            cls.push(classes.green);
        } 
        
        if (answerIsWrong) {
            cls.push(classes.red);
        }
    }

    return (
        <div
            className={classes.wrapper}
            key={index}
            onClick={(e) => onBirdClick(e, index)}>
            <div role="button" className={cls.join(' ')}/>
            <div role="button" id={index} className={classes.name}>
                {name}
            </div>
        </div>
    )
}

function mapStateToProps({game, birdsData}) {
    const {listenAll, gameLogic} = game;
    const {currentBirdIndex} = listenAll;
    const {gameBirdSelected, gameStage} = gameLogic;
    const {data} = birdsData;
    return {currentBirdIndex, gameBirdSelected, data, gameStage}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeListenAllBirdIndex: (e, index) => dispatch(changeListenAllBirdIndex(e, index)),
        changeGameBirdIndex: (e, index) => dispatch(changeGameBirdIndex(e, index)),
        onAnswerTry: (e, index) => dispatch(onAnswerTry(e, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBird)
