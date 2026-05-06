import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import MyTickets from "./pages/MyTickets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/my-tickets" element={<MyTickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;