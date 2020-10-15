import React from 'react'
import {connect} from 'react-redux'
import {changeListenAllBirdIndex} from '../../../../../../redux/actions/listenAllActions/actions'
import classes from './ListenAllSingleBird.module.scss'

function ListenAllSingleBird(props) {
    const {content, index, changeListenAllBirdIndex, currentBirdIndex} = props;
    const {name} = content;

    let cls = [classes.circle];

    if (currentBirdIndex === index) {
        cls.push(classes.green);
    }

    return (
        <div
            className={classes.wrapper}
            key={index}
            onClick={(e) => changeListenAllBirdIndex(e, index)}>
            <div role="button" className={cls.join(' ')}/>
            <div role="button" id={index} className={classes.name}>
                {name}
            </div>
        </div>
    )
}

function mapStateToProps({game}) {
    const {listenAll: {
            currentBirdIndex
        }} = game;

    return {currentBirdIndex}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeListenAllBirdIndex: (e, index) => dispatch(changeListenAllBirdIndex(e, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListenAllSingleBird)
