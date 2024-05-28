import { useState } from "react";
import CATEGORIES from "../utilities/categories";
import supabase from './supabase';

function Fact({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);


  async function handleVote(columnName) {
    setIsUpdating(true);

    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({[columnName] : fact[columnName] + 1})
      .eq("id", fact.id)
      .select();
    setIsUpdating(false);

    if(!error) setFacts((facts) => 
      facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
    );
  }

  return (
        <li className="fact">
            <p>{fact.text}
              <a className="source" target="_blank" href={fact.source}>Source</a>
            </p>
            <span 
              className="tag" 
              style={{backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)?.color}}>{fact.category}</span>
            <div className="vote-buttons">
              <button onClick={() => handleVote("votesInteresting")} disabled={isUpdating}>👍 {fact.votesInteresting}</button>
              <button onClick={() => handleVote("votesMindblowing")}>🤯 {fact.votesMindblowing}</button>
              <button onClick={() => handleVote("votesFalse")}>⛔ {fact.votesFalse}</button>
            </div>
          </li>
  )
}

export default Fact;