import React, {FC} from "react";
import {TextField} from "@mui/material";

type CustomInputProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
}

export const CustomInput: FC<CustomInputProps> = (props) => {
  const {value, onChange, label, error, helperText, multiline, rows} = props;
   
  return (
    <TextField
      rows={rows}
      multiline={multiline}
      value={value}
      onChange={event => onChange(event.target.value)}
      sx={{mt: 3}}
      size={'small'}
      fullWidth
      label={label}
      variant="outlined"
      error={error}
      helperText={helperText}
    />
  )
};
