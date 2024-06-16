import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const IssueForm = ({addIssue}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addIssue(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Add New Issue
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Issue
      </Button>
    </form>
  );
};

export default IssueForm;
