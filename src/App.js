import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Loans from "./pages/Loans";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/register"  element={<Signup />} />
      <Route path="/login"  element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/loans" element={<Loans />} />
    </Routes>
      
    </>
  );
}

export default App;
