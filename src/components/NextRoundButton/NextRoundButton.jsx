import React from 'react';
import {connect} from 'react-redux'
import {goToNextRound, startAgain} from '../../redux/actions/gameActions/actions'
import classes from './NextRoundButton.module.scss';

function NextRound({
    goToNextRound,
    startAgain,
    gameStage,
    isGameFinished,
    isGameStarted,
    isPlaying
}) {
    const {button, deactivated, activated, wrapper, bird} = classes;

    const buttonCls = [button];
    let buttonText,
        onClickFunction;

    let addStage = gameStage !== 5
        ? 1
        : 0;

    if (isPlaying && isGameStarted) {
        onClickFunction = () => {};
        buttonText = 'Выберите правильный вариант...';
        buttonCls.push(deactivated)
    } else if (!isPlaying && !isGameStarted) {
        onClickFunction = () => {};
        buttonText = 'Нажми на плеер чтобы начать';
    } else {
        buttonCls.push(activated);
        onClickFunction = goToNextRound;
        buttonText = 'Следующий раунд';
    }

    if (isGameFinished) {
        onClickFunction = startAgain;
        buttonText = `Начать сначала`;
    }

    return (
        <div className={wrapper}>
            <div className={bird}/>
            <button
                type="button"
                id="button"
                className={buttonCls.join(' ')}
                onClick={() => onClickFunction(addStage)}>
                {buttonText}
            </button>
        </div>
    );
};

function mapStateToProps({game}) {
    const {gameStage, isGameFinished, isPlaying, isGameStarted} = game.gameLogic;

    return {gameStage, isGameFinished, isPlaying, isGameStarted}
}

const mapDispatchToProps = {
    goToNextRound,
    startAgain
}

export default connect(mapStateToProps, mapDispatchToProps)(NextRound);
