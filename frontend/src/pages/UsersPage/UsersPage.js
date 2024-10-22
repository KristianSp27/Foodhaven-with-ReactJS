import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getAll } from "../../services/userService";
import classes from "./usersPage.module.css";

export default function UsersPage() {
  const [users, setUsers] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    loadUsers();
  }, [searchTerm]);

  const loadUsers = async () => {
    const users = await getAll(searchTerm);
    setUsers(users);
  };
  return <div className={classes.container}>UsersPage</div>;
}
