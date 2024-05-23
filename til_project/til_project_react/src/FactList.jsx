function List() {

  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  const initialFacts = [
    {
      id: 1,
      text: "React is being...",
      source: "https://google.com",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021
    },
    {
      id: 2,
      text: "Millenial dads...",
      source: "https://google.com",
      category: "society",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021
    }
  ]

  const facts = initialFacts;

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <li className="fact" key={fact.id}>
            <p>{fact.text}
              <a className="source" target="_blank" href={fact.source}>Source</a>
            </p>
            <span 
              className="tag" 
              style={{backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)?.color}}>{fact.category}</span>
            <div className="vote-buttons">
              <button>👍 {fact.votesInteresting}</button>
              <button>🤯 {fact.votesMindblowing}</button>
              <button>⛔ {fact.votesFalse}</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List;