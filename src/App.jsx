import SearchBar from "./components/SearchBar.jsx";
import ProductTable from "./components/ProductTable.jsx";
import { useState } from 'react';
import { PRODUCTS } from "./consts/products.js";
import PackingList from "./components/PackingList.jsx";

function FilterableProductTable() {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [showPackingList, setShowPackingList] = useState(false);
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
      <button onClick={() => {
        setShowPackingList((current) => {
          return !showPackingList;
        });
      }}>
        Switch
      </button>
      {showPackingList ? <PackingList /> : <ProductTable products={filteredProducts} />}
    </div>
  );
}

export default FilterableProductTable;

      


