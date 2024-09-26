import { useEffect, useState } from "react";
import classes from "./foodsAdminPage.module.css";
import { useParams } from "react-router-dom";
import { getAll, search } from "../../services/foodService";

export default function FoodsAdminPage() {
  const [foods, setFoods] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    loadFoods();
  }, [searchTerm]);

  const loadFoods = async () => {
    const foods = searchTerm ? await search(searchTerm) : await getAll();
    setFoods(foods);
  };

  const FoodsNotFound = () => {
    if (foods && foods.length > 0) return;
  };
  return <div>FoodsAdminPage</div>;
}
