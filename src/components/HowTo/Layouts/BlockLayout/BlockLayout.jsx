import React from 'react'
import classes from './BlockLayout.module.scss'

export default function BlockLayout(props) {
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
