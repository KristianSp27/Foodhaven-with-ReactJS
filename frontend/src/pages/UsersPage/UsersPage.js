import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getAll } from "../../services/userService";

export default function UsersPage() {
  const [users, setUsers] = useState();
  const { searchTerm } = useParams();

  const loadUsers = async () => {
    const users = await getAll();
  };
  return <div>UsersPage</div>;
}
