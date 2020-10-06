import React from 'react'
import HowToBlockLayout from '../Layouts/HowToBlockLayout/HowToBlockLayout'
import HowToHeader from '../Header/howToHeader'
import {renderData} from '../../../utils/renderData'
import HowToText from '../Text/howToText'
import {howToData} from '../../../assets/data/howToData'

export default function WhatToDo() {
    const {whatToDoHeader, whatToDoContent} = howToData;

    const whatToDoElements = renderData(whatToDoContent, HowToText);

    return (
        <HowToBlockLayout>
            <HowToHeader content={whatToDoHeader}/> {whatToDoElements}
        </HowToBlockLayout>
    )
}
