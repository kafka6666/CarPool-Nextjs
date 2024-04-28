import { primaryGradient } from "@/constants";
import { Button, Container, Flex } from "@mantine/core";
import { SelectCarModel } from "../SelectCarModel";
import { SelectCity } from "../SelectCity";
import { SelectCountry } from "../SelectCountry";
import { SelectDate } from "../SelectDate";
import classes from "./SearchEngine.module.css";

export const SearchEngine = () => {
  return (
    <Container className={classes.container}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify="center"
        align={{
          base: "stretch",
          sm: "flex-end",
        }}
      >
        <SelectCountry />
        <SelectCity />
        <SelectCarModel />
        <SelectDate label="Pickup Date" />
        <SelectDate label="Return Date" />
        <Button
          variant="gradient"
          gradient={primaryGradient}
          className={classes.button}
        >
          Search for car
        </Button>
      </Flex>
    </Container>
  );
};
