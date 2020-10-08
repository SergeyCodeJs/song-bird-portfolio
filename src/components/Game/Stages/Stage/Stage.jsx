import React from 'react'
import Number from './Number/Number'
import Text from './Text/Text'
import Line from './Line/Line'
import Circle from './Circle/Circle'

import classes from './Stage.module.scss'

export default function Stage(props) {
  const {index, content} = props;
  
    return (
        <div className={classes.wrapper} key={index}>
            <div className={classes.number_wrapper}>
                <Number index={index}/>
                <Text text={content}/>
            </div>
            <div className={classes.step_wrapper}>
                <Circle/>
                <Line/>
            </div>
        </div>
    )
}
