"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Input from "../general/Input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const RegisterClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>()
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register" center />
        <Input
          placeholder="Name"
          type="text"
          id="name"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="E-mail"
          type="text"
          id="email"
          register={register}
          errors={errors}
          required
        />
        <Input
          placeholder="Password"
          type="password"
          id="password"
          register={register}
          errors={errors}
          required
        />
          <Button
            text="Register with Email"
            onClick={handleSubmit(onSubmit)
            }
          />
          <div className="text-center my-2 font-bold text-lg">
              OR
          </div>
        <Button
          text="Register with Google Account"
          icon={FcGoogle}
          onClick={handleSubmit(onSubmit)}
          outline
        />
            <div className="text-center my-2 text-sm text-brand-logo">
            Already have an account?<Link className="underline" href="/login"> Login here.</Link>
          </div>
      </div>
    </AuthContainer>
  )
}

export default RegisterClient;
