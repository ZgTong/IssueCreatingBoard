import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box
} from "@mui/material";

const IssueList = ({ issues, deleteIssue, updateIssue }) => {
  const [open, setOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  const handleOpen = (issue) => {
    setSelectedIssue(issue);
    setUpdatedTitle(issue.title);
    setUpdatedDescription(issue.description);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIssue(null);
    setUpdatedTitle("");
    setUpdatedDescription("");
  };

  const handleSubmit = () => {
    updateIssue(selectedIssue.id, updatedTitle, updatedDescription);
    handleClose();
  };

  if (!issues || issues.length === 0) {
    return <Typography variant="body1">No issues found.</Typography>;
  }

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }}>
      <List sx={{
        width: "1400px",
        border: "1px solid #ccc",
      }}>
        {issues.map((issue) => (
          <ListItem key={issue.id}>
            <ListItemText primary={`Title: ${issue.title}`} secondary={`Description: ${issue.description}`} />
            <ListItemSecondaryAction>
              <Button
                edge="end"
                aria-label="delete"
                onClick={() => deleteIssue(issue.id)}
              >
                Delete
              </Button>
              <Button
                edge="end"
                aria-label="delete"
                onClick={() => handleOpen(issue)}
              >
                Update
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Issue</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default IssueList;
