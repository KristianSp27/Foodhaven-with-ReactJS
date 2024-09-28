import { useParams } from "react-router-dom";
import classes from "./foodEdit.module.css";
import { useForm } from "react-hook-form";

export default function FoodEditPage() {
  const { foodId } = useParams();
  const isEditMode = !!foodId;

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  return <div>FoodEditPage</div>;
}
