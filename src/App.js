import Navbar from "./components/Navbar"
import People from "./components/People"
import Planets from "./components/Planets"
import { useState } from "react"
import "./index.css"

function App() {
  const [page, setPage] = useState("planets")

  return (
    <div className="App">
      <h1>star wars info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  )
}

export default App
