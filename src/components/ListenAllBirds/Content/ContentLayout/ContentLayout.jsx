import React from 'react'
import classes from './ContentLayout.module.scss'

export default function ContentLayout(props) {
    return (
        <div className={classes.wrapper}>
          {props.children}
        </div>
    )
}