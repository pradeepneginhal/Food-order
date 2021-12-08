import React from "react";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpeg'

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of food!"/>
        </div>
    </Fragment>
};

export default Header;