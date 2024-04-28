import { Select } from "@mantine/core";

export const SelectCity = () => {
  return (
    <Select
      label="City"
      placeholder="City Name"
      data={["Dhaka", "Chattogram"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};
