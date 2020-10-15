import React from 'react';
import classes from './header.module.scss'

function Header() {
    const {header, h1} = classes;
    const headerText = `Узнайте птицу по ее пению`;
    
    return (
        <div className={header}>
            <h1 className={h1}>{headerText}</h1>
        </div>
    );
}

export default Header;
