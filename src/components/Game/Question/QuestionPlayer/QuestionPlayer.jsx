import React from 'react'
import {connect} from 'react-redux'
import {startGame} from '../../../../redux/actions/gameActions/actions'
import classes from './QuestionPlayer.module.scss'
import MusicPlayer from '../../../MusicPlayer/MusicPlayer'

function QuestionPlayer({data, isGameStarted, gameStage, startGame}) {
    const winnerBird = data[gameStage].findIndex((el) => el.rightAnswer);

    const src = data[gameStage][winnerBird].audio;
    const onPlayFunction = !isGameStarted ? startGame : null;

    return (
        <div className={classes.wrapper}>
            <div className={classes.bg_gray}/>
            <h3>1. Разные</h3>
            <p>Нажмите «Play» и выберите из списка правильный вариант</p>
            <MusicPlayer
                autoPlay={false}
                src={src}
                style={{
                backgroundColor: '#F3F3F3',
                color: "black",
                border: 'none',
                outline: 'none'
            }}
                onPlay={onPlayFunction}/>
        </div>
    )
}

function mapStateToProps({birdsData, game}) {
    const {gameLogic: {isGameStarted, gameStage}} = game;
    const {data} = birdsData;
    return {data, isGameStarted, gameStage}
}

const mapDispatchToProps = {
    startGame
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPlayer)