import React from 'react'
import {connect} from 'react-redux'
import {changeBirdType} from '../../../../../redux/actions/listenAllActions/actions'
import classes from './BirdType.module.scss'

function BirdType(props) {
    const {button, button_active} = classes;
    const {type, index, changeBirdType, listenAllBirdType} = props;

    const cls = [button];

    if (listenAllBirdType === index) {
        cls.push(button_active);
    }

    return (
        <div
            key={index}
            role="button"
            onClick={(e) => changeBirdType(e, index)}
            className={cls.join(' ')}>
            <p>{type}</p>
        </div>
    );
}

const mapStateToProps = ({game}) => {
    const {listenAllBirdType} = game.listenAll;
    return {listenAllBirdType}
}

const mapDispatchToProps = {
    changeBirdType
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdType)