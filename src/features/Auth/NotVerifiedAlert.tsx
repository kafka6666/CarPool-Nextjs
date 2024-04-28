import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

export const NotVerifiedAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="User Account Not Verified"
      color="orange"
      my="sm"
    >
      Sorry! We are unable to verify your account. Please check your account
      credentials and try again.
    </Alert>
  );
};
