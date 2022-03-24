import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />

        <ItemListContainer greeting="Texto para ser reemplazado por el catálogo de la tienda" />
      </header>
    </div>
  );
}


export default App;
