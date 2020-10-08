import React from 'react';
import classes from './NextRoundButton.module.scss';

function NextRound() {
  const buttonCls = [classes.button, classes.activated];

  return (
    <div className={classes.wrapper}>
      <div className={classes.bird} />
      <button
        type="button"
        id="button"
        className={buttonCls.join(' ')}
        onClick={null}
      >
        Следующий раунд
      </button>
    </div>
  );
};

export default NextRound;
