"use client";

import FooterLink from "@/components/forms/footerLink";
import InputField from "@/components/forms/inputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="form-title">Log In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Email Address is required",
          }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong passsword"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Logging In...." : "Log In"}
        </Button>
        <FooterLink
          text="Don't have an account?"
          linkText="Create an account"
          href="/sign-up"
        />
      </form>
    </>
  );
}
