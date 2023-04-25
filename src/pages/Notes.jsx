import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const sx = {
  avatar: {
    backgroundColor: "violet",
  },
  gridContainer: {
    marginTop: 10,
    paddingBottom: 10,
  },
};

const Notes = ({ notes, setNotes }) => {
  const handleDelete = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  const note = notes.map((note) => {
    return (
      <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={1}>
          <CardHeader
            avatar={
              <Avatar sx={sx.avatar}>{note.category[0].toUpperCase()}</Avatar>
            }
            action={
              <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlined color="primary" />
              </IconButton>
            }
            title={note.title}
            subheader={note.category}
          ></CardHeader>
          <CardContent>
            <Typography variant="body2" color="primary">
              {note.note}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });
  return (
    <Container maxWidth={false}>
      <Grid container spacing={3} sx={sx.gridContainer}>
        {note}
      </Grid>
    </Container>
  );
};

export default Notes;
