import React from 'react'
import Worm from './Worm/Worm'
import getArrayWithElements from '../../../../utils/getArrayWithElements'
import classes from './Score.module.scss'

export default function Score() {
  const wormsArray = getArrayWithElements(5, Worm);
    return (
        <div className={classes.wrapper}>
            <p className={classes.worms}>{`Общий счет: 5 червячков`}</p>
            <div>
                {wormsArray}
            </div>
        </div>
    )
}
