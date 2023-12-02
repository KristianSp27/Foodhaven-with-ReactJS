import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import classes from "./registerPage.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {};
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Register" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="text"
            label="name"
            {...register("name", {
              required: true,
              minLength: 5,
            })}
            error={errors.name}
          />

          <Input
            type="email"
            label="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: "Email is not valid",
              },
            })}
            error={errors.email}
          />

          <Input
            type="password"
            label="Confirm password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => (value !== getValues("password") ? "The passwords do not match" : true),
            })}
            error={errors.confirmPassword}
          />
        </form>
      </div>
    </div>
  );
}
