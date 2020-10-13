import React from 'react'
import classes from './Loading.module.scss'

export default function Loading() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.cssload_container}>
                <div className={classes.cssload_loro}>
                    <div className={classes.cssload_circ}></div>
                    <div className={classes.cssload_circ3}></div>
                    <div className={classes.cssload_circ5}></div>
                    <div className={classes.cssload_circ7}></div>
                    <div className={classes.cssload_ojo}></div>
                </div>
            </div>
        </div>
    )
}
