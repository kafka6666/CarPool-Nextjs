import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import { GoogleButton } from "./GoogleButton.tsx";
import classes from "./Style.module.css";

export const Login = (props: PaperProps) => {
  return (
    <Box px="md" py="xl" className={classes.box}>
      <Paper className={classes.formPaper} withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome back! Please login to your account.
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
              label="Password"
              placeholder="Your password"
              radius="md"
            />
          </Stack>

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
