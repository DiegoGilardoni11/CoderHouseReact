import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const brand = "Itento de E-Commerce";
  const [categories, setCategories] = useState([
    { name: "Inicio", content: "¡Bienvenido a nuestra tienda en línea!" },
    { name: "Productos", content: "Aquí tenemos una selección de nuestros productos." },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="App">
      <Navbar brand={brand} categories={categories} onCategoryChange={handleCategoryChange} />
      <ItemListContainer greeting={selectedCategory} category={selectedCategory} />
    </div>
  );
}

export default App;
