import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <ItemDetailContainer/>
      </header>
    </div>
  );
}


export default App;
