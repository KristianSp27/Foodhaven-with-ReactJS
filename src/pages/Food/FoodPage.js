import React, { useEffect, useState } from "react";
import classes from "./foodPage.module.css";
import { useParams } from "react-router-dom";
import { getById } from "../../services/foodService";
import StarRating from "../../components/StarRating/StarRating";

export default function FoodPage() {
  const [food, setFood] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);
  return (
    <>
      {food && (
        <div className={classes.container}>
          <img className={classes.image} src={`/foods/${food.imageUrl}`} alt={food.name} />

          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}> {food.name} </span>
              <span className={`${classes.favorite} ${food.favorite ? "" : classes.not}`}>❤</span>
            </div>

            <div className={classes.rating}>
              <StarRating stars={food.stars} size={25} />
            </div>

            <div className={classes.origins}>
              {food.origins?.map((origin) => (
                <span key={origin}>{origin}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}