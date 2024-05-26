import CATEGORIES from "../utilities/categories";

function Fact({ fact }) {

  console.log(fact);
  return (
        <li className="fact">
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
  )
}

export default Fact;