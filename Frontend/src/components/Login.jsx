import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token in state and localStorage
        setToken(data.token);
        localStorage.setItem("token", data.token);

        // ✅ Redirect to Home page
        navigate("/home");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Server error");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        {message && <p className="mt-3 text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}