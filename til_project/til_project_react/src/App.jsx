import './styles.css';
import Header from "./Header"
import CategoryFilter from './CategoryFilters';
import NewFactForm from './Form';
import FactList from './FactList';

function App() {
  return (
    <>
      <Header />
      <NewFactForm />
      
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
      
    </>
  )
}

export default App;