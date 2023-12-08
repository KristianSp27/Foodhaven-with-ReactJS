import React from "react";
import { useForm } from "react-hook-form";

export default function ChangePassword() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return <div>ChangePassword</div>;
}
