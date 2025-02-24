"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-auto text-center mt-10" >
      <h1>FastAPI + Next.js</h1>
      <p>Backend says: <strong>{message || "Loading..."}</strong></p>
    </div>
  );
}
