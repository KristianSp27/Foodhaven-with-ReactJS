import { useParams } from "react-router-dom";
import classes from "./foodEdit.module.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { getById } from "../../services/foodService";
import Title from "../../components/Title/Title";

export default function FoodEditPage() {
  const { foodId } = useParams();
  const isEditMode = !!foodId;

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!isEditMode) return;
    getById(foodId).then((food) => {
      if (!food) return;
      reset(food);
    });
  }, [foodId]);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title title={isEditMode ? "Edit food" : "Add food"} />
      </div>
    </div>
  );
}
