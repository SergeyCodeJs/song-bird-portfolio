import React from 'react'
import {connect} from 'react-redux'
import ShowAllBirdsButton from './ShowAllBirdsButton/ShowAllButton'
import CommonLayout from './CommonLayout/CommonLayout'
import Content from './Content/Content'

function ListenAllBirds({isInterfaceOpen}) {
    const ListenAllContent = isInterfaceOpen
        ? <Content/>
        : null;

    return (
        <CommonLayout>
            <ShowAllBirdsButton/> 
            {ListenAllContent}
        </CommonLayout>
    )
}

const mapStateToProps = ({game}) => {
    const {listenAll: {
            isInterfaceOpen
        }} = game;
    return {isInterfaceOpen}
};

export default connect(mapStateToProps, null)(ListenAllBirds)