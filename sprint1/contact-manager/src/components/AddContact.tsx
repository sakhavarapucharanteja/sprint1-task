import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contacts/ContactSlice";
import { AppDispatch } from "../app/store";
import { TextField, Button, Box, Typography } from "@mui/material";

const AddContact: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleAddContact = () => {
    if (name.trim() !== "" && number.trim() !== "") {
      dispatch(
        addContact({
          id: Date.now(),
          name,
          number,
        })
      );
      setName("");
      setNumber("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "20px auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Contact Details
      </Typography>

      <TextField
        label="Enter Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />

      <TextField
        label="Enter Number"
        variant="outlined"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        fullWidth
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddContact}
        fullWidth
      >
        Add Contact
      </Button>
    </Box>
  );
};

export default AddContact;
