import React from 'react'
import classes from './StagesHeader.module.scss'

export default function GameHeader() {
    const {game_header} = classes;

    return (
        <h2 className={game_header}>Полетели!</h2>
    )
}
