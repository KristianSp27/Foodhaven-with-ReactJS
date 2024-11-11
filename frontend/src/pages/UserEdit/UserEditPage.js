import React from "react";
import { useForm } from "react-hook-form";

export default function UserEditPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return <div>UserEditPage</div>;
}
