import React from "react";
import { useAuth } from "../../hooks/useAuth";
import NotFound from "../NotFound/NotFound";

function AdminRoute({ children }) {
  const { user } = useAuth();
  return user.isAdmin ? children : <NotFound linkRoute="/dashboard" linkText="Go to the dashboard" message="You ddon't have access to this page." />;
}
