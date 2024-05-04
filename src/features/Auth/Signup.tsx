"use client";
import { Logo } from "@/components/Navbar/Logo";
import { signupWithEmailPassword } from "@/services/auth.service";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import EmailConfirmation from "@/components/EmailConfirmation.tsx";
import { useSignupForm } from "@/hooks/useSignupForm";
import Link from "next/link";
import { useState } from "react";
import { GoogleButton } from "./GoogleButton";
import classes from "./Style.module.css";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const signupForm = useSignupForm();
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //     terms: true,
  //   },
  //   validate: {
  //     email: (value: string) =>
  //       /^\S+@\S+$/.test(value) ? null : "Invalid email",
  //     password: (value: string) =>
  //       value.length > 6
  //         ? null
  //         : "Password should contain at least 6 characters",
  //     confirmPassword: (value: string, { password }) =>
  //       value === password ? null : "Passwords do not match", // Check with source code
  //     terms: (terms: boolean) =>
  //       !terms ? "You should accept terms and conditions" : null,
  //   },
  // });

  const handleSignup = async () => {
    const { email, password } = signupForm.values;

    setIsSubmitting(true);
    const { error } = await signupWithEmailPassword(email, password);

    if (error) {
      console.log(error);
      setIsSubmitting(true);
    } else {
      setIsSubmitting(true);
      setIsSubmitted(true);
      console.log("Signup successful!");
    }
  };

  return (
    <>
      {isSubmitted ? (
        <EmailConfirmation email={signupForm.values.email} />
      ) : (
        <>
          <LoadingOverlay
            visible={isSubmitting}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
          <Box px="md" py="xl" className={classes.box}>
            <Paper className={classes.formPaper} withBorder>
              <Text size="lg" fw={500}>
                Welcome to <Logo />
              </Text>
              <GoogleButton />
              <Divider
                label="Or continue with email"
                labelPosition="center"
                my="center"
              />
              <form onSubmit={signupForm.onSubmit(() => handleSignup())}>
                <Stack>
                  <TextInput
                    required
                    label="Email"
                    placeholder="example@carlink.com"
                    radius="md"
                    value={signupForm.values.email}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "email",
                        event.currentTarget.value
                      )
                    }
                    error={signupForm.errors.email && signupForm.errors.email}
                  />
                  <PasswordInput
                    required
                    label="Your Password"
                    placeholder="Your password"
                    radius="md"
                    value={signupForm.values.password}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "password",
                        event.currentTarget.value
                      )
                    }
                    error={
                      signupForm.errors.password && signupForm.errors.password
                    }
                  />
                  <PasswordInput
                    required
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    radius="md"
                    value={signupForm.values.confirmPassword}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        "confirmPassword",
                        event.currentTarget.value
                      )
                    }
                    error={
                      signupForm.errors.confirmPassword &&
                      signupForm.errors.confirmPassword
                    }
                  />
                  <Checkbox
                    label="I accept all terms and conditions"
                    // value={signupForm.values.terms}
                    checked={event.currentTarget.checked}
                    onChange={(event) => {
                      console.log(event.currentTarget.checked);

                      console.log(signupForm.values);
                      signupForm.setFieldValue(
                        "terms",
                        event.currentTarget.checked
                      );
                    }}
                    error={signupForm.errors.terms && signupForm.errors.terms}
                  />
                </Stack>

                <Group justify="space-between" mt="xl">
                  <Anchor
                    component={Link}
                    href="/login"
                    type="button"
                    c="dimmed"
                    size="xs"
                  >
                    Already have an account? Log in here.
                  </Anchor>
                  <Button type="submit" radius="xl">
                    Signup
                  </Button>
                </Group>

                <Group mt="xl">
                  <Anchor
                    component={Link}
                    href="/providers"
                    type="button"
                    c="dimmed"
                    size="xs"
                  >
                    Want to Rent your car? Create a Provider Account.
                  </Anchor>
                </Group>
              </form>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
};

export default Signup;
