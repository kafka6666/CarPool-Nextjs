import { Carousel } from "@mantine/carousel";
import { Center, Image } from "@mantine/core";

const images = [
  "https://res.cloudinary.com/dmsofoexc/image/upload/v1714155808/CarLink/car-group-photo-03_bvy4bu.png",
  "https://res.cloudinary.com/dmsofoexc/image/upload/v1714154504/CarLink/1_PZfQ-E8XOb1kRPp4YaILOw_p6p2ls.png",
];

export const Slider = () => {
  return (
    <Carousel withIndicators loop>
      {images.map((image) => (
        <Carousel.Slide key={image}>
          <Center h={{ base: 400, md: 500, xl: 700 }}>
            <Image src={image} alt="group car image" />
          </Center>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
