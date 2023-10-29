import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Analytics from "./Components/Analytics";
import Data from "./Components/Data";
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/home" element={<Home />} />
       <Route path="/analytics" element={<Analytics />} />
       <Route path="/data" element={<Data />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
