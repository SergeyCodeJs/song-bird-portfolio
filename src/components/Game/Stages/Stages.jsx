import React from 'react'
import {renderData} from '../../../utils/renderData'
import StagesHeader from './StagesHeader/StagesHeader'
import Stage from './Stage/Stage'
import classes from './Stages.module.scss'

export default function Stages() {
  const data = ['Разные', 'Воробьи', 'Лесные', 'Певчие', 'Хищные', 'Морские'];

  const stagesData = renderData(data, Stage);

    return (
        <div className={classes.wrapper}>
            <div className={classes.inner_wrapper}>
              <StagesHeader/>
              <div className={classes.stage_wrapper}>
                {stagesData}
              </div>
            </div>
        </div>
    )
}
