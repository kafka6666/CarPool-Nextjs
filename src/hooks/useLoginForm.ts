import { useForm } from "@mantine/form";

export const useLoginForm = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Please provide a valid email",
      password: (value: string) =>
        value.length > 6
          ? null
          : "Password should contain at least 6 characters",
    },
  });

  return form;
};
