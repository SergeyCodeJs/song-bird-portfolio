import React from 'react'
import {connect} from 'react-redux'
import classes from './ListenAllBirdsList.module.scss'
import ListenAllSingleBird from './ListenAllSingleBird/ListenAllSingleBird'
import {renderData} from '../../../../../utils/renderData'

function ListenAllBirdsList({data, listenAllBirdType}) {
    const {container} = classes;

    const birdsElements = renderData(data[listenAllBirdType], ListenAllSingleBird);

    return (
        <div className={container}>
            {birdsElements}
        </div>
    )
}

function mapStateToProps({birdsData, game}) {
    const {data} = birdsData;
    const {listenAll: {
            listenAllBirdType
        }} = game;

    return {data, listenAllBirdType}
}

export default connect(mapStateToProps, null)(ListenAllBirdsList)