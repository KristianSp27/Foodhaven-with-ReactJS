import { useEffect, useState } from "react";
import classes from "./foodsAdminPage.module.css";
import { Link, useParams } from "react-router-dom";
import { getAll, search } from "../../services/foodService";
import NotFound from "../../components/NotFound/NotFound";
import Title from "../../components/Title/Title";

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

    return searchTerm ? (
      <NotFound linkRoute="/admin/foods" linkText="Show all" />
    ) : (
      <NotFound linkRoute="/dashboard" linkText="Return to the dashboard" />
    );
  };
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Title title="Manage the foods" margin="1rem auto" />
        <Link to="/admin/addFood" className={classes.add_food}>
          Add food +
        </Link>
        <FoodsNotFound />
      </div>
    </div>
  );
}
