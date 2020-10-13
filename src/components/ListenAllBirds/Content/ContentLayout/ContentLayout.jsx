import React from 'react'
import {CSSTransition} from 'react-transition-group'
import './ContentLayout.scss'

export default function ContentLayout(props) {
    return (
        <CSSTransition
            appear={true}
            in={true}
            exit={true}
            timeout={300}
            classNames="birds-list-opacity">
            <div className="content-layout-wrapper">
                {props.children}
            </div>
        </CSSTransition>
    )
}
