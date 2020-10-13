import React from 'react'
import getWormName from '../../../../utils/getWormName'
import setWinText from '../../../../utils/setWinText.js'
import classes from './WinWindow.module.scss'

function WinWindow({stageScore, totalScore, type}) {
    const stageWinText = `В этом раунде вы набрали ${stageScore} ${getWormName(stageScore, true)}! Продолжаем?`

    const winText = setWinText(totalScore);

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.win_text}>{type
                    ? `Правильно!`
                    : `Ура, победа!`}</h2>
            <p
                className={type
                ? classes.current_score
                : classes.end_game_text}>{type
                    ? stageWinText
                    : winText}</p>
            <div
                className={type
                ? classes.current_score__img
                : classes.win_img}></div>
        </div>
    )
}

export default WinWindow
