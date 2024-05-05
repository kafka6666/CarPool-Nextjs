"use client";
import { primaryGradient } from "@/constants";
import { useUserSessionContext } from "@/context/UserSessionContext";
import { Button, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProfileMenu } from "../ProfileMenu";

const excludedPaths = ["/login", "/signup"];

export const AuthButtons = () => {
  const smallScreen = useMediaQuery("(max-width: 991px)");
  const pathName = usePathname();
  const { session } = useUserSessionContext();

  return (
    <>
      {!excludedPaths.includes(pathName) && (
        <Group grow={smallScreen}>
          {session ? (
            <ProfileMenu />
          ) : (
            <>
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
            </>
          )}
        </Group>
      )}
    </>
  );
};
