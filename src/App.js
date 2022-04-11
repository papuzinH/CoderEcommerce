import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route path="/category/:idCategory" element={<ItemListContainer />} />
      <Route path="/item/:idItem" element={<ItemDetailContainer />} />
    </Routes>
    
    </BrowserRouter>
    // <div className="App">
    //   <header>
    //     <Navbar />
    //     <ItemDetailContainer/>
    //   </header>
    // </div>
  );
}


export default App;
