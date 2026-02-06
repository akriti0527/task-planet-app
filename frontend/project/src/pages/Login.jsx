import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Stack
} from "@mui/material";
import api from "../api/axios";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ToastAlert from "../component/ToastAlert";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", form);

      setToken(res.data.token);

      // ✅ success alert
      setAlert({
        open: true,
        message: "✅ Login successful! Redirecting...",
        severity: "success",
      });

      // ⏱ redirect after alert
      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      // ❌ error alert
      setAlert({
        open: true,
        message:
          error.response?.data?.message ||
          "Invalid email or password",
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5" align="center">
              Login
            </Typography>

            <TextField
              label="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <TextField
              label="Password"
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <Button variant="contained" onClick={submit}>
              Login
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* 🔔 ALERT */}
      <ToastAlert
        open={alert.open}
        handleClose={handleClose}
        message={alert.message}
        severity={alert.severity}
      />
    </Container>
  );
}
