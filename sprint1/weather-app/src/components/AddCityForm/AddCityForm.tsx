import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

interface AddCityFormProps {
  handleAddCity: (cityName: string) => void;
}

const AddCityForm: React.FC<AddCityFormProps> = ({ handleAddCity }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddCity(value);
    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="space-between"
      component="form"
      autoComplete="off"
      noValidate
    >
      <TextField
        fullWidth
        onChange={handleChange}
        id="filled-basic"
        label="City"
        variant="filled"
        value={value}
      />
    </Box>
  );
};

export default AddCityForm;
