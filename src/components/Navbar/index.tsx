import { Box, Group } from "@mantine/core";
import { AuthButtons } from "./AuthButtons.tsx";
import { Logo } from "./Logo.tsx";
import { NavigationMobile } from "./NavigationMobile.tsx";
import { ThemeSwitchers } from "./ThemeSwitchers.tsx";
import classes from "./style.module.css";

export default function Navbar() {
  return (
    <Box className={classes.header}>
      <Group justify="space-between" h="100%">
        <Logo />
        <Box visibleFrom="md">
          <AuthButtons />
        </Box>
        <Box visibleFrom="sm">
          <ThemeSwitchers />
        </Box>
        <Box hiddenFrom="md">
          <NavigationMobile />
        </Box>
      </Group>
    </Box>
  );
}
