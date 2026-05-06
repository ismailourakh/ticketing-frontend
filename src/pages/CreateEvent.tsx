import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [totalSeats, setTotalSeats] = useState("");

  const navigate = useNavigate();

  const handleCreateEvent = async () => {
    try {
      await API.post("/events", {
        title,
        description,
        totalSeats: Number(totalSeats),
      });

      alert("Event created successfully");
      navigate("/");
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to create event");
    }
  };

  return (
    <div>
      <h1>Create Event</h1>

      <input
        placeholder="Event title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Event description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Total seats"
        type="number"
        value={totalSeats}
        onChange={(e) => setTotalSeats(e.target.value)}
      />

      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
}