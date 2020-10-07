import React from 'react';
import CommonLayout from './Layouts/CommonLayout/CommonLayout'
import BlockLayout from './Layouts/BlockLayout/BlockLayout'
import HowToHeader from './Elements/Header/howToHeader'
import TextBlock from './Elements/TextBlock/TextBlock'
import {renderData} from '../../utils/renderData'
import {howToData} from '../../assets/data/howToData'

export default function HowTo() {
    const {whatToDoHeader, whatToDoContent} = howToData;
    const {scoreHeader, scoreContent} = howToData;

    const scoreText = renderData(scoreContent, TextBlock);
    const whatToDoText = renderData(whatToDoContent, TextBlock);

    return (
        <CommonLayout>
            <BlockLayout>
                <HowToHeader content={whatToDoHeader}/> 
                {whatToDoText}
            </BlockLayout>
            <BlockLayout rightBlock={true}>
                <HowToHeader content={scoreHeader}/> 
                {scoreText}
            </BlockLayout>
        </CommonLayout>
    )
}