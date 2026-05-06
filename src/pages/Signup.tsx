import { useState } from "react";
import API from "../services/api";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await API.post("/auth/signup", {
        email,
        password,
      });

      alert("User created");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div>
      <h1>Signup</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}