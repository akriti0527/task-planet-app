import {
    Container,
    TextField,
    Button,
    Card,
    CardContent,
    Stack,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import api from "../api/axios";
  import ToastAlert from "../component/ToastAlert";
  
  export default function CreatePost({ onPostCreated }) {
    const [content, setContent] = useState("");
  
    const [alert, setAlert] = useState({
      open: false,
      message: "",
      severity: "success",
    });
  
    const handleClose = () =>
      setAlert({ ...alert, open: false });
  
    const submitPost = async () => {
      if (!content.trim()) return;
  
      try {
        const res = await api.post("/posts", { content });
  
        // 🔔 Success alert
        setAlert({
          open: true,
          message: "📝 Post created successfully!",
          severity: "success",
        });
  
        // 🟢 SEND NEW POST TO FEED
        onPostCreated(res.data);
  
        setContent("");
      } catch (error) {
        setAlert({
          open: true,
          message: "Failed to create post",
          severity: "error",
        });
      }
    };
  
    return (
      <Container maxWidth="sm" sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h6">Create Post</Typography>
  
              <TextField
                placeholder="What's on your mind?"
                multiline
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
  
              <Button variant="contained" onClick={submitPost}>
                Post
              </Button>
            </Stack>
          </CardContent>
        </Card>
  
        <ToastAlert
          open={alert.open}
          handleClose={handleClose}
          message={alert.message}
          severity={alert.severity}
        />
      </Container>
    );
  }
  