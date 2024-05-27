import './styles.css';
import { useState, useEffect } from 'react';
import supabase from './supabase';
import Header from "./Header"
import CategoryFilter from './CategoryFilters';
import initialFacts from '../utilities/initialFacts';
import FactList from './FactList';

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(function() {
    async function getFacts() {
      const { data: facts, error } = await supabase
      .from('facts').select('*')
      setFacts(facts);
    }
    getFacts();
  }, []);

  return (
    <>
      <Header setFacts={setFacts}/>
      
      <main className="main">
        <CategoryFilter />
        <FactList facts={facts}/>
      </main>
      
    </>
  )
}

export default App;