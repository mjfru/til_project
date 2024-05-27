import { useState } from "react"
import NewFactForm from "./NewFactForm";

function Header({ setFacts }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="til logo"/>
          <h1>Today I Learned</h1>
        </div>
        <button 
          className="btn btn-large btn-open"
          onClick={() => setShowForm((show) => !show)}>
            {showForm ? 'Close' : 'Share a Fact'}
        </button>
      </header>
      { showForm ? <NewFactForm setFacts={setFacts} setShowForm={setShowForm}/> : null }
    </>
  )
}

export default Header