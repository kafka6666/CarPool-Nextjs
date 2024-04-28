import { Button, Group } from "@mantine/core";
import React from "react";

export const GoogleButton = () => {
  return (
    <Group grow mb="md" mt="md">
      <Button
        leftSection={<GoogleIcon />}
        variant="default"
        color="gray"
        radius="xl"
      >
        Google
      </Button>
    </Group>
  );
};

function GoogleIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 40 50"
      width="0.9rem"
      height="0.9rem"
      {...props}
    >
      <path
        fill="#FFC107"
        d="M42 24c0-1.3-.2-2.6-.5-3.8H24v7h10.1a9.5 9.5 0 0 1-3.9 6.3v5.2h6.3c3.7-3.4 5.8-8.3 5.8-14.7z"
      ></path>
      <path
        fill="#FF3D00"
        d="M24 46c5.4 0 9.9-1.8 13.8-4.9l-6.3-5.2c-1.7 1.1-3.9 1.8-6.4 1.8-4.9 0-9-3.3-10.5-7.8H7.5v5.1A23.95 23.95 0 0 0 24 46z"
      ></path>
      <path
        fill="#4CAF50"
        d="M13.5 27.7a12.5 12.5 0 0 1 0-7.7V14H7.4a23.9 23.9 0 0 0 0 20.1l6.1-4.4z"
      ></path>
      <path
        fill="#1976D2"
        d="M24 7.9c2.5 0 4.7.8 6.4 2.1l6.3-5.2C33.9 1.8 29.4 0 24 0 14.1 0 6.1 7.1 4.6 16.9l6.1 4.4c1.5-4.5 5.6-7.8 10.3-7.8z"
      ></path>
    </svg>
  );
}
