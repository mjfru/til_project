import { useState } from "react";
import CATEGORIES from "../utilities/categories";

function NewFactForm() {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  // text.length is referring to the state of text
  const textLength = text.length;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text, source, category);
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}/>

      <span>{200 - textLength}</span>
      <input 
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}/>
      
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
          {/* Below has the value of "" so it will match state and display by default */}
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => 
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>)}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  )
}

export default NewFactForm;