import React from 'react'
import HowToBlockLayout from '../HowToBlockLayout/HowToBlockLayout'
import HowToHeader from '../Header/howToHeader'
import HowToText from '../Text/howToText'
import {renderData} from '../../../utils/renderData'
import {howToData} from '../../../assets/data/howToData'

export default function Score() {
    const {scoreHeader, scoreContent} = howToData;
    const scoreElements = renderData(scoreContent, HowToText);

    return (
        <HowToBlockLayout rightBlock={true}>
            <HowToHeader content={scoreHeader}/> {scoreElements}
        </HowToBlockLayout>
    )
}
