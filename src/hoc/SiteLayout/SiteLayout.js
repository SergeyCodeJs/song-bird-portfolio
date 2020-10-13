import React from 'react'
import './SiteLayout.scss'

import {CSSTransition} from 'react-transition-group'

export default function Layout(props) {

    return (
        <CSSTransition appear={true} in={true} timeout={300} classNames="opacity">
            <div className="Layout">
                {props.children}
            </div>
        </CSSTransition>
    )
}
