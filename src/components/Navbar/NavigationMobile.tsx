"use client";
import { Burger, Center, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AuthButtons } from "./AuthButtons";
import { Logo } from "./Logo";
import { ThemeSwitchers } from "./ThemeSwitchers";

export const NavigationMobile = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={<Logo />}
        size="xs"
        transitionProps={{ transition: "slide-right" }}
      >
        <AuthButtons />

        <Center hiddenFrom="sm" pos="fixed" bottom={0} w="90%" py={8}>
          <ThemeSwitchers />
        </Center>
      </Drawer>
      <Burger opened={opened} onClick={open} aria-label="Toggle navigation" />
    </>
  );
};
