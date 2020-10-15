import React from 'react'
import classes from './CommonLayout.module.scss'

export default function CommonLayout(props) {
    const {content_wrapper} = classes;

    return (
        <div className={content_wrapper}>
            {props.children}
        </div>
    )
}
