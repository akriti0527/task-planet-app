import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={location.pathname}
        onChange={(e, value) => navigate(value)}
      >
        <BottomNavigationAction
          label="Feed"
          value="/"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Login"
          value="/login"
          icon={<LoginIcon />}
        />
        <BottomNavigationAction
          label="Register"
          value="/register"
          icon={<PersonAddIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
