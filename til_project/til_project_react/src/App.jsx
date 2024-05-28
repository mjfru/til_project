import './styles.css';
import { useState, useEffect } from 'react';
import supabase from './supabase';
import Header from "./Header"
import CategoryFilter from './CategoryFilters';
import Loader from './Loader';
import FactList from './FactList';

function App() {
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(function() {
    async function getFacts() {
      setIsLoading(true);
      
      let query = supabase.from("facts").select("*");
      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);


      const { data: facts, error } = await query
      // .from('facts')
      // .select('*')
      // .eq("category", "society")
      .order('votesInteresting', 
      {ascending: false}).limit(1000);
      // What table from supabase, select these (all) columsn, and order preference (sort by name of column, descending)
      
      if (!error) setFacts(facts);
      else alert("There was a problem retrieving the data.");
      setIsLoading(false);
    }
    getFacts();
    // When the value in the previously empty array changes, data re-renders.
  }, [currentCategory]);

  return (
    <>
      <Header setFacts={setFacts} />
      
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory}/>
        {isLoading ? <Loader /> : <FactList facts={facts} setFacts={setFacts}/>}
        
      </main>
      
    </>
  )
}

export default App;