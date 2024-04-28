"use client";
import { DateInput, DateValue } from "@mantine/dates";
import { ReactNode } from "react";

interface Props {
  label?: ReactNode;
  value?: DateValue | Date;
  onChange?: (value: DateValue) => void;
  minDate?: Date;
}

export const SelectDate = ({ label, value, onChange, minDate }: Props) => {
  return (
    <DateInput
      label={label}
      placeholder="Select Date"
      value={value}
      onChange={onChange}
      minDate={minDate}
      width="100%"
    />
  );
};
