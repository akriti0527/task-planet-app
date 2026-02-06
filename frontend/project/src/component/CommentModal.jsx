import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Stack
} from "@mui/material";
import { useState } from "react";
import { commentPost } from "../api/postApi";

export default function CommentModal({ open, onClose, postId }) {
  const [text, setText] = useState("");

  const submit = async () => {
    await commentPost(postId, text);
    setText("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add Comment</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={submit}>
            Post
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
