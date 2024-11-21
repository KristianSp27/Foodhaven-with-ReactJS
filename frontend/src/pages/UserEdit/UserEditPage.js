import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getById } from "../../services/userService";
import classes from "./userEdit.module.css";

export default function UserEditPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userId } = useParams();
  const isEditMode = userId;

  useEffect(() => {
    if (isEditMode) loadUser();
  }, [userId]);

  const loadUser = async () => {
    const user = await getById(userId);
    reset(user);
  };
  return <div className={classes.container}>UserEditPage</div>;
}
