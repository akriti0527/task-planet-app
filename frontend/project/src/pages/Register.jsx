import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ToastAlert from "../component/ToastAlert";

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      // ✅ Success alert
      setAlert({
        open: true,
        message: "🎉 Registration successful! Redirecting to login...",
        severity: "success",
      });

      // ⏱ Redirect after showing alert
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      setAlert({
        open: true,
        message:
          error.response?.data?.message ||
          "Registration failed. Try again.",
        severity: "error",
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper elevation={3} sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" textAlign="center" mb={2}>
          Register
        </Typography>

        <Box component="form" onSubmit={handleRegister}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            fullWidth
            label="Password"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </Box>
      </Paper>

      {/* 🔔 ALERT */}
      <ToastAlert
        open={alert.open}
        handleClose={handleClose}
        message={alert.message}
        severity={alert.severity}
      />
    </Box>
  );
}

export default Register;


