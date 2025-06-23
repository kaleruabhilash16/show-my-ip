import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ipData, setIPData] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/") // or use ipinfo.io/json
      .then((res) => res.json())
      .then((data) => {
        setIPData(data);
      })
      .catch((err) => console.error("Failed to fetch IP/location", err));
  }, []);

  return (
    <div className="App">
      <h1>Your Public IP Address and Location:</h1>
      {ipData ? (
        <>
          <p className="ip">IP: {ipData.ip}</p>
          <p>City: {ipData.city}</p>
          <p>Region: {ipData.region}</p>
          <p>Country: {ipData.country_name}</p>
          <p>ISP: {ipData.org}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
