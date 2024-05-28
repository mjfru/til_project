import { useState } from "react";
import CATEGORIES from "../utilities/categories";
import supabase from "./supabase";

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // text.length is referring to the state of text
  const textLength = text.length;

  async function handleSubmit(e) {
    
    // 1. Prevent browser from reloading
    e.preventDefault();
    console.log(text, source, category);

    // 2. Check if data is valid, create new fact
    if(text && text.length <= 200 && isValidHttpUrl(source) && category) {
      console.log("We have liftoff!")
      
      // 3. Create a new fact object
      // const newFact = {
      //   id: Math.round(Math.random() * 100000),
      //   text,
      //   source,
      //   category,
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear()
      // };

      // 3. Upload fact to Supabase & receive the new fact object:
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{text, source, category}])
        .select();
      setIsUploading(false);
      
      // 4. Add new fact to the UI/state
      if(!error) setFacts((facts) => [newFact[0], ...facts]);
    }

    // 5. Reset input fields
    setText("");
    setSource("");
    setCategory("");
    
    // 6. Close the form
    setShowForm(false);
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}/>

      <span>{200 - textLength}</span>
      <input 
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}/>
      
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}>
          {/* Below has the value of "" so it will match state and display by default */}
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => 
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>)}
      </select>
      <button className="btn btn-large" disabled={isUploading}>Post</button>
    </form>
  )
}

export default NewFactForm;