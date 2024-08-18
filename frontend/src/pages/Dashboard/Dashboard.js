import React from "react";
import { useAuth } from "../../hooks/useAuth";
import classes from "./dashboard.module.css";

export default function Dashboard() {
  const { user } = useAuth();
  return <div>Dashboard</div>;
}
