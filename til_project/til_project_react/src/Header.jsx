function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="til logo"/>
        <h1>Today I Learned</h1>
      </div>
      <button className="btn btn-large btn-open">Share A Fact</button>
    </header>
  )
}

export default Header