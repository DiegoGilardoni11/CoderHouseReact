import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import products from './components/data'; 



function App() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer categories={categories} />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
