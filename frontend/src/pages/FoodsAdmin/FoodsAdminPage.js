import { useState } from "react";
import classes from "./foodsAdminPage.module.css";
import { useParams } from "react-router-dom";

export default function FoodsAdminPage() {
  const [foods, setFoods] = useState();
  const { searchTerm } = useParams();
  return <div>FoodsAdminPage</div>;
}
