import { useParams } from "react-router-dom";
import classes from "./foodEdit.module.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getById } from "../../services/foodService";
import Title from "../../components/Title/Title";
import InputContainer from "../../components/InputContainer/InputContainer";

export default function FoodEditPage() {
  const { foodId } = useParams();
  const [imageUrl, setImageUrl] = useState();
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
      setImageUrl(food.imageUrl);
    });
  }, [foodId]);

  const submit = () => {};

  const upload = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title title={isEditMode ? "Edit food" : "Add food"} />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <InputContainer label="Select image">
            <input type="file" onChange={upload} accept="image/jpeg" />
          </InputContainer>
        </form>
      </div>
    </div>
  );
}
