import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BottomNav from "./component/BottomNav";

function App() {
  return (
    <BrowserRouter>
      {/* Pages */}
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Navigation always visible */}
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
