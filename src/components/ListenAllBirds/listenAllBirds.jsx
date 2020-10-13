import React from 'react'
import {connect} from 'react-redux'
import ShowAllBirdsButton from './ShowAllBirdsButton/ShowAllButton'
import CommonLayout from './CommonLayout/CommonLayout'
import Content from './Content/Content'

function ListenAllBirds({listenAll}) {
    const {isInterfaceOpen} = listenAll;
    return (
        <CommonLayout>
            <ShowAllBirdsButton/> {isInterfaceOpen
                ? <Content/>
                : null}
        </CommonLayout>
    )
}

const mapStateToProps = ({game}) => {
    const {listenAll} = game;
    return {listenAll}
};

export default connect(mapStateToProps, null)(ListenAllBirds)