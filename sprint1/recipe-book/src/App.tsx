import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import AddEditRecipe from './pages/AddEditRecipe';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddEditRecipe />} />
        <Route path="/edit/:id" element={<AddEditRecipe />} />
      </Routes>
    </>
  );
}

export default App;
