import React from "react";
import HeaderCartButton from "./HeadreCartButton";
import mealImg from "../../asests/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="a table full od delicious food!" />
      </div>
    </>
  );
};

export default Header;
