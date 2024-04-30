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
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value: string) =>
        value.length > 6
          ? null
          : "Password should contain at least 6 characters",
      confirmPassword: (value: string, { password }) =>
        value === password ? null : "Passwords do not match", // Check with source code
      terms: (terms: boolean) =>
        !terms ? "You should accept terms and conditions" : null,
    },
  });

  return form;
};
