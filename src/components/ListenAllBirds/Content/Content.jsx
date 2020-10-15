import React from 'react'
import ContentLayout from './ContentLayout/ContentLayout'
import BirdTypes from './BirdTypes/BirdTypes'
import ListenAllPlayer from './Player/ListenAllBirds'

export default function ListenAllContent() {
    return (
        <ContentLayout>
            <BirdTypes/>
            <ListenAllPlayer/>
        </ContentLayout>
    )
}
