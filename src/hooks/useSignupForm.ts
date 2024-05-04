import { ISignupFormDetails } from "@/models/index.ts";
import { UseFormReturnType, useForm } from "@mantine/form";

export const useSignupForm = (): UseFormReturnType<ISignupFormDetails> => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: true,
    },
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Please provide a valid email",
      password: (value: string) =>
        value.length > 6
          ? null
          : "Password should contain at least 6 characters",
      confirmPassword: (value: string, { password }) =>
        value === password ? null : "Passwords do not match",
      terms: (terms: boolean) =>
        !terms ? "You should accept terms and conditions" : null,
    },
  });

  return form;
};
