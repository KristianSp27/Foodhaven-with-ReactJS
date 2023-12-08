import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

export default function ProfilePage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const submit = (user) => {
    //updates the profile
  };
  return <div>ProfilePage</div>;
}
