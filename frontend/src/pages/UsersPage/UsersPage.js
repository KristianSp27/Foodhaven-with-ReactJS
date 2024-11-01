import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getAll } from "../../services/userService";
import classes from "./usersPage.module.css";
import Title from "../../components/Title/Title";

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
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Title title="Manage users" />
        <div className={classes.list_item}>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Address</h3>
          <h3>Admin</h3>
          <h3>Actions</h3>
        </div>
        {users &&
          users.map((user) => (
            <div key={user.id} className={classes.list_item}>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.address}</span>
              <span>{user.isAdmin ? "✅" : "❌"}</span>
              <span className={classes.actions}>
                <Link to={"/admin/editUser/" + user.id}>Edit</Link>
                {<Link onClick={() => handleToggleBlock(user.id)}></Link>}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
