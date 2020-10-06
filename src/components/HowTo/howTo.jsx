import React from 'react';
import HowToCommonLayout from './Layouts/HowToCommonLayout/howToCommonLayout'
import WhatToDo from './WhatToDo/WhatToDo'
import Score from './Score/Score'

export default function HowTo() {
    return (
        <HowToCommonLayout>
            <WhatToDo/>
            <Score/>
        </HowToCommonLayout>
    )
}