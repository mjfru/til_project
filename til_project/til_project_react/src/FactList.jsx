import Fact from "./Fact";

function List({ facts, setFacts }) {
  
  if(facts.length === 0) {
    return <p className="message">There are no facts for this category...yet! Make the first one!</p>
  }

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts}/>
        ))}
      </ul>
      <p>There are {facts.length} facts in the database.</p>
    </section>
  )
}

export default List;