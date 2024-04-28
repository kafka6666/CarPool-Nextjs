import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export const NotRegisteredAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="User Account Not Found"
      color="red"
      my="sm"
    >
      We{`'`}re sorry that we couldn{`'`}t find an account with that email
      address. Please double-check your email address and password before trying
      again, or create a new account if you do not have one.
    </Alert>
  );
};
