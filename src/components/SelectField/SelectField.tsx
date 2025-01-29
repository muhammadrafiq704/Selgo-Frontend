import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface SelectFieldProps {
  label: string;
  options: { label: string; value: string | number }[];
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  name?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  options,
  onChange,
  name,
  disabled = false,
  fullWidth = true,
}) => {
  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} name={name} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
