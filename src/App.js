import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/register"  element={<Signup />} />
      <Route path="/login"  element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
      
    </>
  );
}

export default App;
