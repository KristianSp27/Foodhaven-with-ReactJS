import React from "react";
import { useAuth } from "../../hooks/useAuth";
import classes from "./dashboard.module.css";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className={classes.container}>
      <div className={classes.menu}></div>
    </div>
  );
}

const allItems = [
  {
    title: "Orders",
    imageUrl: "/icons/orders.svg",
    url: "/orders",
    bgColor: "#ec407a",
    color: "white",
  },
  {
    title: "Profile",
    imageUrl: "/icons/profile.svg",
    url: "/profile",
    bgColor: "#1565c0",
    color: "white",
  },
  {
    title: "Users",
    imageUrl: "/icons/users.svg",
    url: "/admin/users",
    forAdmin: true,
    bgColor: "#00bfa5",
    color: "white",
  },
  {
    title: "Foods",
    imageUrl: "/icons/foods.svg",
    url: "/admin/foods",
    forAdmin: true,
    bgColor: "#e040fb",
    color: "white",
  },
];
