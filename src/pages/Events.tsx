import { useEffect, useState } from "react";
import API from "../services/api";

type Event = {
  id: string;
  title: string;
  description: string;
  totalSeats: number;
  availableSeats: number;
  createdAt: string;
};

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    const res = await API.get("/events");
    setEvents(res.data);
  };

  const reserveTicket = async (eventId: string) => {
    try {
      await API.post("/tickets/reserve", { eventId });
      alert("Ticket reserved successfully");
      fetchEvents();
    } catch (err: any) {
      alert(err.response?.data?.message || "Reservation failed");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>

      {events.map((event) => (
        <div
          key={event.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Total seats: {event.totalSeats}</p>
          <p>Available seats: {event.availableSeats}</p>

          <button onClick={() => reserveTicket(event.id)}>
            Reserve Ticket
          </button>
        </div>
      ))}
    </div>
  );
}