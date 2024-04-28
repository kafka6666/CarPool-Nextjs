import { Select } from "@mantine/core";

export const SelectCountry = () => {
  return (
    <Select
      label="Country"
      placeholder="County Name"
      data={["Bangladesh"]}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};
