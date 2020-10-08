import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.inner_wrapper}>
        <div className={classes.produced}>
          <p>Стех Dev</p>
          <p>2020</p>
        </div>
        <div>
          <p>Thanks for illustrations: https://icons8.ru</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
