import React from 'react';

import classes from './ErrorIndicator.module.scss'

const ErrorIndicator = () => {
  return (
    <div className={classes.error_indicator}>
      <span className={classes.boom}>Ошибка!</span>
      <span>
        Что-то не так, птицы улетают на юг!
      </span>
      <span>
        (Но они обязательно вернутся весной)
      </span>
    </div>
  );
};

export default ErrorIndicator;
