"use client";
import { primaryGradient } from "@/constants";
import { Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width: 991px)");

  return (
    <Group grow={smallScreen}>
      <Button variant="default" component={Link} href="/login">
        Log in
      </Button>
      <Button
        variant="gradient"
        gradient={primaryGradient}
        component={Link}
        href="/signup"
      >
        Sign up
      </Button>
    </Group>
  );
};
