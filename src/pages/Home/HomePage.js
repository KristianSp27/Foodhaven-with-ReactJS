import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import { getAll, getAllTags, search } from "../../services/foodService";
import Tags from "../../components/Tags/Tags";

const initialState = { foods: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "FOODS_LOADED":
      return { ...state, foods: action.payload };
    case "TAGS_LOADED":
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;
  const { searchTerm } = useParams();

  useEffect(() => {
    getAllTags().then((tags) => dispatch({ type: "TAGS_LOADED", payload: tags }));
    const loadFoods = searchTerm ? search(searchTerm) : getAll();

    loadFoods.then((foods) => dispatch({ type: "FOODS_LOADED", payload: foods }));
  }, [searchTerm]);

  return (
    <>
      <Search />
      <Tags />
      <Thumbnails foods={foods} />
    </>
  );
}
