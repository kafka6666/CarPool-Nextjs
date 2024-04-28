import { primaryGradient } from "@/constants";
import { Text } from "@mantine/core";
import Link from "next/link";

export const Logo = () => {
  return (
    <Text
      component={Link}
      fz="lg"
      fw="bold"
      variant="gradient"
      gradient={primaryGradient}
      href="/"
    >
      CarLink
    </Text>
  );
};
