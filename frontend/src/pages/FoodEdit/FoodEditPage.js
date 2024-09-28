import { useParams } from "react-router-dom";
import classes from "./foodEdit.module.css";

export default function FoodEditPage() {
  const { foodId } = useParams();
  const isEditMode = !!foodId;
  return <div>FoodEditPage</div>;
}
