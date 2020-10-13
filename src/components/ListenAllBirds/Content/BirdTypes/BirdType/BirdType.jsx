import React from 'react'
import {connect} from 'react-redux'
import {changeBirdType} from '../../../../../redux/actions/listenAllActions/actions'
import classes from './BirdType.module.scss'

function BirdType(props) {
    const {type, index, changeBirdType} = props;
    const {listenAllBirdType} = props.listenAll
    
    const cls = [classes.button];
    
    if (listenAllBirdType === index) {
        cls.push(classes.button_active);
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
  const {listenAll} = game;
  return {listenAll}
}

const mapDispatchToProps = {
    changeBirdType
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdType)