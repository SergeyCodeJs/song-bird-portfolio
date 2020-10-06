import React from 'react'
import classes from './HowToBlockLayout.module.scss'

export default function HowToBlockLayout(props) {
    const cls = [classes.block_inner_wrapper];

    if (props.rightBlock) {
        cls.push(classes.block_inner_wrapper_right)
    }
    return (
        <div className={classes.block}>
            <div className={cls.join(' ')}>
                {props.children}
            </div>
        </div>
    )
}
