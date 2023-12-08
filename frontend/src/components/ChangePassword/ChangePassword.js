import React from "react";
import { useForm } from "react-hook-form";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function ChangePassword() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submit = (passwords) => {
    //changes the password
  };
  return (
    <div>
      <Title title="Change password" />
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="password"
          label="Current password"
          {...register("currentPassword", {
            required: true,
          })}
          error={errors.currentPassword}
        />

        <Input
          type="password"
          label="New password"
          {...register("newPassword", {
            required: true,
            minLength: 5,
          })}
          error={errors.newPassword}
        />

        <Input
          type="password"
          label="Confirm password"
          {...register("confirmNewPassword", {
            required: true,
            validate: (value) => (value != getValues("newPassword") ? "The passwords do not match." : true),
          })}
          error={errors.confirmNewPassword}
        />

        <Button type="submit" text="Change" />
      </form>
    </div>
  );
}
