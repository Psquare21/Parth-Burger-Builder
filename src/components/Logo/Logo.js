import React from 'react';
import burgerlogo from '../../assests/Images/original.png';
import classes from './logo.css';
const logo=(props)=>(
    <div className={classes.Logo}>
        <img src={ burgerlogo} alt="MyBurger"/>
    </div>
);
export default logo;