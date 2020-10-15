import React from 'react'
import getWormName from '../../../../utils/getWormName'
import setWinText from '../../../../utils/setWinText.js'
import classes from './WinWindow.module.scss'

function WinWindow({stageScore, totalScore, type}) {
    const {wrapper, win_text, current_score, current_score__img, win_img, end_game_text} = classes;

    const stageWinText = `В этом раунде вы набрали ${stageScore} ${getWormName(stageScore, true)}! Продолжаем?`

    const winText = setWinText(totalScore);

    return (
        <div className={wrapper}>
            <h2 className={win_text}>{type
                    ? `Правильно!`
                    : `Ура, победа!`}</h2>
            <p
                className={type
                ? current_score
                : end_game_text}>{type
                    ? stageWinText
                    : winText}</p>
            <div
                className={type
                ? current_score__img
                : win_img}></div>
        </div>
    )
}

export default WinWindow
