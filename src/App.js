import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <ItemListContainer/>
      </header>
    </div>
  );
}


export default App;
