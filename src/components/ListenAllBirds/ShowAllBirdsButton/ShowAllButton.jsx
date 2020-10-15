import React from 'react'
import {connect} from 'react-redux'
import {openListenAllModal} from '../../../redux/actions/listenAllActions/actions'
import Arrow from './ButtonArrow/ButtonArrow'
import classes from './ShowAllButton.module.scss'

function ShowAllButton({isGameStarted, isInterfaceOpen, openListenAllModal}) {

    const {button, button_deactivated, button_text_wrapper, button_text} = classes;
    let cls = button;
    let wrapperStyles = {};
    let onButtonClickHandler = openListenAllModal;
    let buttonText = !isInterfaceOpen
        ? 'Послушать всех птиц'
        : 'Закрыть плеер';
    let ArrowElement = <Arrow isInterfaceOpen={isInterfaceOpen}/>;

    if (isGameStarted) {
        buttonText = 'Игра началась, а подсматривать против правил!';
        cls = button_deactivated;
        wrapperStyles = {
            width: "100%"
        }
        onButtonClickHandler = () => {};
        ArrowElement = null;
    }

    return (
        <div className={cls} onClick={onButtonClickHandler}>
            <div style={wrapperStyles} className={button_text_wrapper}>
                <h2 className={button_text}>{buttonText}</h2>
                {ArrowElement}
            </div>
        </div>
    )
}

function mapStateToProps({game}) {
    const {listenAll: {
            isInterfaceOpen
        }} = game;

    const {gameLogic: {
            isGameStarted
        }} = game;

    return {isGameStarted, isInterfaceOpen}
}

const mapDispatchToProps = {
    openListenAllModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllButton)