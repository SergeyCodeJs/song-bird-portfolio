import React from 'react'
import classes from './Worm.module.scss'

export default function Worm({additional}) {
  const styles = {opacity: 0}
  return (
    <div style={additional ? styles : {}} className={classes.worm_img}/>
  )
}
