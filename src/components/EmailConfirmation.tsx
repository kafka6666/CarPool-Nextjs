import { Alert, Button, Flex, Space, Text } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  email: string;
}

const EmailConfirmation = ({ email }: Props) => {
  return (
    <Flex
      maw="600px"
      mx="auto"
      px="md"
      mih="400px"
      justify="center"
      align="center"
    >
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="Confirm your Signup"
        color="blue"
      >
        Confirmation email has been sent to email{" "}
        <Text component="span" fw="bold">
          {email || "test@example.com"}
        </Text>{" "}
        Please follow the link to confirm your signup.
        <Space my="md" />
        <Button component={Link} href="/login" my="md">
          Login
        </Button>
      </Alert>
    </Flex>
  );
};

export default EmailConfirmation;
