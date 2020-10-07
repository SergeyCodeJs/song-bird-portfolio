import React from 'react'
import classes from './CommonLayout.module.scss'

export default function Layout(props) {
    return (
        <div className={classes.wrapper}>
          {props.children}
        </div>
    )
}
