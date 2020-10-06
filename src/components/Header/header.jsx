import React from 'react';
import classes from './header.module.scss'

function Header() {
    return (
        <div className={classes.header}>
            <h1 className={classes.h1}>Узнайте птицу по ее пению</h1>
        </div>
    );
}

export default Header;
