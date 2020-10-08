import React from 'react'
import classes from './Number.module.scss'

export default function Number({index}) {
    return (
        <div className={classes.number}>
            {index + 1}
        </div>
    )
}
