import SearchBar from "./components/SearchBar.jsx";
import ProductTable from "./components/ProductTable.jsx";
import { useState } from 'react';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function FilterableProductTable() {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const filterProducts = ({ name = '', onlyInStock = false } = {}) => {
    const result = PRODUCTS.filter((product) => {
      const matchesName = !name || product.name.toLowerCase().includes(name.toLowerCase());
      const matchesStock = !onlyInStock || product.stocked;
      return matchesName && matchesStock;
    });
    setFilteredProducts(result);
  };

  return (
    <div>
      <SearchBar onSearch={filterProducts} />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default FilterableProductTable;


