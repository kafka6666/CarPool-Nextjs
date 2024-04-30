import { Logo } from "@/components/Navbar/Logo";
import { useSignupForm } from "@/hooks/useSignupForm";
import { signupWithEmailPassword } from "@/services/auth.service";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import { GoogleButton } from "./GoogleButton";
import classes from "./Style.module.css";

const Signup = () => {
  const signupForm = useSignupForm();

  const handleSignup = async () => {
    const { email, password } = signupForm.values;
    const { error } = await signupWithEmailPassword(email, password);

    if (error) {
      console.log(error);
    } else {
      console.log("Signup successful!");
    }
  };

  return (
    <>
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
                  signupForm.setFieldValue("email", event.currentTarget.value)
                }
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
              />
              <Checkbox
                label="I accept all terms and conditions"
                checked={signupForm.values.terms}
                onChange={(event) =>
                  signupForm.setFieldValue("terms", event.currentTarget.checked)
                }
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
  );
};

export default Signup;
