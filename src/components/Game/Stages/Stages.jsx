import React from 'react'
import {renderData} from '../../../utils/renderData'
import getStageName from '../../../utils/getStageName'
import StagesHeader from './StagesHeader/StagesHeader'
import Stage from './Stage/Stage'
import classes from './Stages.module.scss'

export default function Stages() {
    const {wrapper, inner_wrapper, stage_wrapper} = classes;
    const data = getStageName();

    const stagesData = renderData(data, Stage);

    return (
        <div className={wrapper}>
            <div className={inner_wrapper}>
                <StagesHeader/>
                <div className={stage_wrapper}>
                    {stagesData}
                </div>
            </div>
        </div>
    )
}
