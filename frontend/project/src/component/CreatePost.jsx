import {
  Card,
  CardContent,
  TextField,
  Button,
  Stack
} from "@mui/material";
import { useState } from "react";

export default function CreatePost({ refresh }) {
  const [text, setText] = useState("");

  const submitPost = async () => {
    if (!text) return;

    await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ text }),
    });

    setText("");
  };

  return (
    <Card elevation={2}>
      <CardContent>
        <Stack spacing={2}>
          <TextField
            placeholder="Share something with the community..."
            multiline
            minRows={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={submitPost}
            sx={{ alignSelf: "flex-end" }}
          >
            Post
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
