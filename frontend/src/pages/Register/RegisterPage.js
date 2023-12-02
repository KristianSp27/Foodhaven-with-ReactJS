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
      </div>
    </div>
  );
}