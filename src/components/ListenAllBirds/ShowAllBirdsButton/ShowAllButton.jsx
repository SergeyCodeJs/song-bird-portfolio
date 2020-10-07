import React from 'react'
import classes from './ShowAllButton.module.scss'

export default function ShowAllButton({isPlayerStarted}) {
  let cls = classes.button


  if (isPlayerStarted) {
    cls = classes.button_deactivated;
  }

    return (
        <div className={cls}>
            <div className={classes.button_text_wrapper}>
                <h2>Послушать всех птиц</h2>
                <Arrow showAll={true}/>
            </div>
        </div>
    )
}

function Arrow({showAll}) {
  let cls = [classes.arrow_top];

  if(showAll) {
    cls.push(classes.rotate)
  }

  return <div className={cls.join(' ')} />
}