import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error calling API"))
  }, [])

  return (
    <div>
      <h1>My Garage the firkin best</h1>
      <h1>Api message: {message}</h1>
    </div>
  )
}

export default App
