import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import { lightTheme } from "../theme/theme";

interface DropdownProps {
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue = "",
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      sx={{
        ".MuiOutlinedInput-notchedOutline": { border: "none" },
        ".MuiSelect-select": {
          padding: "8px 24px 8px 8px",
          backgroundColor: "transparent",
        },
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{
            ":hover": {
              backgroundColor: lightTheme.palette.custom.orange,
            },
            borderRadius: "5px",
            padding: "10px 20px",
          }}
        >
          <Typography
          variant="h4"
          sx={{
            fontSize:"16px",
            fontWeight:"400",
            lineHeight:"24px"
          }}>{option.label}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
