import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function UserEditPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userId } = useParams();
  const isEditMode = userId;
  return <div>UserEditPage</div>;
}
