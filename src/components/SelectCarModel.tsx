import { Select } from "@mantine/core";

export const SelectCarModel = () => {
  return (
    <Select
      label="Car Model"
      placeholder="Car Model"
      data={["All", "Toyota", "Honda", "Mazda", "Mitsubishi", "Nissan"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};
