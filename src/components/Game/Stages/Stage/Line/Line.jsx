import React from 'react'
import classes from './Line.module.scss'

export default function Line() {
  const cls = [classes.line, classes.gray]
  return (
    <div className={cls.join(' ')}/>
  )
}
