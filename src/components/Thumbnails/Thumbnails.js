import React from "react";
import { Link } from "react-router-dom";
import classes from "./thumbnails.module.css";

export default function Thumbnails({ foods }) {
  return (
    <ul className={classes.list}>
      {foods.map((food) => (
        <li key={food.id}>
          <Link to={`/food/${food.id}`}>
            <img className={classes.image} src={`/foods/${food.imageUrl}`} alt={food.name} />
          </Link>
          <div className={classes.content}>
            <div className={classes.name}>{food.name}</div>
            <span className={`${classes.favorite} ${food.favorite ? "" : classes.not}`}>❤</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
