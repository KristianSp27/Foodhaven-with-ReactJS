import { useEffect, useState } from "react";
import classes from "./foodsAdminPage.module.css";
import { Link, useParams } from "react-router-dom";
import { getAll, search } from "../../services/foodService";
import NotFound from "../../components/NotFound/NotFound";
import Title from "../../components/Title/Title";
import Price from "../../components/Price/Price";

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
        <Title title="Manage Foods" margin="1rem auto" />
        <Link to="/admin/addFood" className={classes.add_food}>
          Add Food +
        </Link>
        <FoodsNotFound />
        {foods &&
          foods.map((food) => (
            <div key={food.id} className={classes.list_item}>
              <img src={food.imageUrl} alt={food.name} />
              <Link to={"/food/" + food.id}>{food.name}</Link>
              <Price price={food.price} />
              <div className={classes.actions}>
                <Link to={"/admin/editFood/" + food.id}>Edit</Link>
                <Link>Delete</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
