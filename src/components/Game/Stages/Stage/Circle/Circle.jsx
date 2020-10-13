import React from 'react'
import classes from './Circle.module.scss'

export default function Circle({gameStage, index}) {
  const cls = [classes.circle];

  if(gameStage >= index) {
    cls.push(classes.green);
  }
  return (
    <div className={cls.join(' ')}/>
  )
}

