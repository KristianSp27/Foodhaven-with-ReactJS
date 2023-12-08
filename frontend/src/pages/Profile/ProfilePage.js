import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import classes from ".profilePage.module.css/";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";

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
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Update profile" />
        <form onSubmit={handleSubmit(submit)}>
          <Input
            defaultValue={user.name}
            type="text"
            label="name"
            {...register("name", {
              required: true,
              minLength: 5,
            })}
            error={errors.name}
          />
        </form>
      </div>
    </div>
  );
}
