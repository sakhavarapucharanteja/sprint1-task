import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { deleteContact, editContact } from "./ContactSlice";
import {
  List,
  ListItemText,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

const ContactList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editNumber, setEditNumber] = useState("");

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id: number, name: string, number: string) => {
    setEditId(id);
    setEditName(name);
    setEditNumber(number);
    setOpen(true);
  };

  const handleSaveEdit = () => {
    if (editId !== null) {
      dispatch(editContact({ id: editId, name: editName, number: editNumber }));
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "20px auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Contact List
      </Typography>

      {contacts.length === 0 ? (
        <Typography variant="body1" align="center" color="textSecondary">
          No contacts available!
        </Typography>
      ) : (
        <List>
          {contacts.map((contact) => (
            <Card
              key={contact.id}
              variant="outlined"
              sx={{
                marginBottom: 2,
                padding: 1,
                backgroundColor: "#fff",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ListItemText
                  primary={contact.name}
                  secondary={`Number: ${contact.number}`}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() =>
                      handleEdit(contact.id, contact.name, contact.number)
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </List>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Number"
            value={editNumber}
            onChange={(e) => setEditNumber(e.target.value)}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactList;
