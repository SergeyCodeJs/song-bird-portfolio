import React from 'react'
import classes from './QuestionPlayer.module.scss'
import MusicPlayer from '../../../MusicPlayer/MusicPlayer'

export default function QuestionPlayer() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.bg_gray}/>
            <h3>1. Разные</h3>
            <p>Нажмите «Play» и выберите из списка правильный вариант</p>
            <MusicPlayer
                autoPlay={false}
                src={""}
                style={{
                backgroundColor: '#F3F3F3',
                color: "black",
                border: 'none',
                outline: 'none'
            }}
                onPlay={null}/>
        </div>
    )
}
