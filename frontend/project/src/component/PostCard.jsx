import {
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Divider
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function PostCard({ post }) {

  const likePost = async () => {
    await fetch(
      `http://localhost:5000/api/posts/like/${post._id}`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  };

  return (
    <Card elevation={2}>
      <CardContent>
        <Stack spacing={1}>
          <Typography fontWeight="600">
            {post.user}
          </Typography>

          <Typography variant="body2">
            {post.text}
          </Typography>

          <Divider />

          <Stack direction="row" spacing={2}>
            <IconButton onClick={likePost}>
              <FavoriteIcon fontSize="small" />
              <Typography ml={0.5}>
                {post.likes.length}
              </Typography>
            </IconButton>

            <IconButton>
              <ChatBubbleOutlineIcon fontSize="small" />
              <Typography ml={0.5}>
                {post.comments.length}
              </Typography>
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
