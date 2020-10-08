import React from 'react'
import classes from './SingleBird.module.scss'

export default function SingleBird({content, index}) {
    const {name} = content;

    return (
        <div className={classes.wrapper} key={index}>
            <div role="button" className={classes.circle}/>
            <div role="button" id={index} onClick={null} className={classes.name}>
                {name}
            </div>
        </div>
    )
}
