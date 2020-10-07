import React from 'react'
import ShowAllBirdsButton from './ShowAllBirdsButton/ShowAllButton'
import CommonLayout from './CommonLayout/CommonLayout'
import Content from './Content/Content'

export default function ListenAllBirds({isPlayerStarted}) {
  
  return (
      <CommonLayout>
        <ShowAllBirdsButton isPlayerStarted={false}/>
        <Content/>
      </CommonLayout>
  )
}
