import React from 'react'
import classes from './BlockLayout.module.scss'

export default function BlockLayout(props) {
    const {block, block_inner_wrapper, block_inner_wrapper_right} = classes;
    const {rightBlock, children} = props;

    const cls = [block_inner_wrapper];

    if (rightBlock) {
        cls.push(block_inner_wrapper_right)
    }
    return (
        <div className={block}>
            <div className={cls.join(' ')}>
                {children}
            </div>
        </div>
    )
}
