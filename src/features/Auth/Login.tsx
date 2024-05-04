"use client";
import { useLoginForm } from "@/hooks/useLoginForm.ts";
import { loginWithEmailPassword } from "@/services/auth.service.ts";
import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoogleButton } from "./GoogleButton.tsx";
import { NotRegisteredAlert } from "./NotRegisteredAlert.tsx";
import { NotVerifiedAlert } from "./NotVerifiedAlert.tsx";
import classes from "./Style.module.css";

const errorMessage = "Invalid login credentials. Please try again.";

export const Login = (props: PaperProps) => {
  const [notRegistered, setNotRegistered] = useState<boolean>(false);
  const [notVerified, setNotVerified] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { push } = useRouter();

  const loginForm = useLoginForm();

  const handleLogin = async () => {
    const { email, password } = loginForm.values;

    setIsSubmitting(true);
    const { error, data } = await loginWithEmailPassword(email, password);
    setIsSubmitting(false);

    if (error && error.message === errorMessage) {
      console.log(error);
      setNotRegistered(true);
    } else {
      if (data.user == null || data.session == null) {
        setNotVerified(true);
      }
      loginForm.reset();
      setNotRegistered(false);
      setNotVerified(false);
      push("/");
      console.log("Login successful");
    }
  };

  return (
    <Box px="md" py="xl" className={classes.box}>
      <Paper className={classes.formPaper} withBorder {...props}>
        <LoadingOverlay
          visible={isSubmitting}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <Text size="lg" fw={500}>
          Welcome back! Please login to your account.
        </Text>
        <GoogleButton />
        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="center"
        />
        <form onSubmit={loginForm.onSubmit(() => handleLogin())}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="example@carlink.com"
              radius="md"
              value={loginForm.values.email}
              onChange={(event) =>
                loginForm.setFieldValue("email", event.currentTarget.value)
              }
              error={loginForm.errors.email && loginForm.errors.email}
            />
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              radius="md"
              value={loginForm.values.password}
              onChange={(event) =>
                loginForm.setFieldValue("password", event.currentTarget.value)
              }
              error={loginForm.errors.password && loginForm.errors.password}
            />
          </Stack>
          {notRegistered && <NotRegisteredAlert />}
          {notVerified && <NotVerifiedAlert />}

          <Group justify="space-between" mt="xl">
            <Anchor
              component={Link}
              href="/signup"
              type="button"
              c="dimmed"
              size="xs"
            >
              Don{`'`}t have an account yet? Register Now
            </Anchor>
            <Button type="submit" radius="xl">
              Login
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
  );
};
