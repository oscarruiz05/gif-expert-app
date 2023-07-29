import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App() {
  const [categories, setCategories] = useState([]);

  const addCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={addCategory} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
}

export default App;
