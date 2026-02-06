import { useEffect, useState } from "react";
import api from "../api/axios";
import CreatePost from "./CreatePost";
import ToastAlert from "../component/ToastAlert";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data);
  };

  const handleNewPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  // 🗑️ DELETE POST
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);

      setPosts((prev) => prev.filter((p) => p._id !== id));

      setAlert({
        open: true,
        message: "🗑️ Post deleted",
        severity: "success",
      });
    } catch {
      setAlert({
        open: true,
        message: "Failed to delete post",
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <CreatePost onPostCreated={handleNewPost} />

      <Stack spacing={2} sx={{ mt: 3 }}>
        {posts.map((post) => (
          <Card key={post._id}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography>{post.content}</Typography>

              {/* 🗑️ DELETE BUTTON */}
              <IconButton
                color="error"
                onClick={() => handleDelete(post._id)}
              >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <ToastAlert
        open={alert.open}
        handleClose={() =>
          setAlert({ ...alert, open: false })
        }
        message={alert.message}
        severity={alert.severity}
      />
    </Container>
  );
}
