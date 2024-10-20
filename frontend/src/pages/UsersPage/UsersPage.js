import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function UsersPage() {
  const [users, setUsers] = useState();
  const { searchTerm } = useParams();
  return <div>UsersPage</div>;
}
