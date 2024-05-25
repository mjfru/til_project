import './styles.css';
import Header from "./Header"
import CategoryFilter from './CategoryFilters';
import NewFactForm from './NewFactForm';
import FactList from './FactList';

function App() {
  return (
    <>
      <Header />
      
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
      
    </>
  )
}

export default App;