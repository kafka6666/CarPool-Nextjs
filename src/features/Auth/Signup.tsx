import { Logo } from "@/components/Navbar/Logo.tsx";
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
import { GoogleButton } from "./GoogleButton.tsx";
import classes from "./Style.module.css";

export const Signup = () => {
  return (
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
        <form>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="example@carlink.com"
              radius="md"
            />
            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Your password"
              radius="md"
            />
            <Checkbox label="I accept all terms and conditions" />
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
  );
};
