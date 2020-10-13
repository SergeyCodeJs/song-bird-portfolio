import React from 'react'
import Arrow from './ButtonArrow/ButtonArrow'
import {connect} from 'react-redux'
import {openListenAllModal} from '../../../redux/actions/listenAllActions/actions'
import classes from './ShowAllButton.module.scss'

function ShowAllButton({isGameStarted, isInterfaceOpen, openListenAllModal}) {
    let cls = classes.button;
    let buttonText = !isInterfaceOpen
        ? 'Послушать всех птиц'
        : 'Закрыть плеер';

    if (isGameStarted) {
        buttonText = 'Игра началась, а подсматривать против правил!';
        cls = classes.button_deactivated;
    }

    return (
        <div className={cls} onClick={!isGameStarted? openListenAllModal : null}>
            <div style={!isGameStarted ? {} : {width: "100%"}} className={classes.button_text_wrapper}>
                <h2>{buttonText}</h2>
                {!isGameStarted ? <Arrow isInterfaceOpen={isInterfaceOpen}/> : null}
            </div>
        </div>
    )
}

function mapStateToProps({game}) {
    const {listenAll, gameLogic} = game;
    const {isInterfaceOpen} = listenAll;
    const {isGameStarted} = gameLogic;
    return {isGameStarted, isInterfaceOpen}
}

const mapDispatchToProps = {
    openListenAllModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllButton)