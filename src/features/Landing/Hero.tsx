import { SearchEngine } from "@/components/SearchEngine/index.tsx";
import { Container } from "@mantine/core";
import { Slider } from "./Slider.tsx";
import classes from "./style.module.css";

export const Hero = () => {
  return (
    <Container fluid pb="4rem" className={classes.hero}>
      <Slider />

      <Container>
        <SearchEngine />
      </Container>
    </Container>
  );
};
