import Fact from "./Fact";

function List() {
  
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
          <Fact key={fact.id} fact={fact}/>
        ))}
      </ul>
      <p>There are {initialFacts.length} facts in the database.</p>
    </section>
  )
}

export default List;