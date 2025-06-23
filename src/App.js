import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ip, setIP] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIP(data.ip))
      .catch((err) => console.error("Failed to fetch IP", err));
  }, []);

  return (
    <div className="App">
      <h1>Your Public IP Address:</h1>
      <p className="ip">{ip ? ip : "Loading..."}</p>
    </div>
  );
}

export default App;
