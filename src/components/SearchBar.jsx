import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
    const [search, setSearch] = useState("");
    const [onlyInStock, setOnlyInStock] = useState(false);

    const handleSearchChange = (ev) => {
        setSearch(ev.target.value);
     
    };

    const handleInStockChecked = (ev) => {
        setOnlyInStock(ev.target.checked);
      
        console.log('Clicked');
    };

    useEffect(() => {
        onSearch({ name: search, onlyInStock})

    }, [search, onlyInStock])

    return (
        <form>
          <input type="text" placeholder="Search..." value={search} onChange={handleSearchChange} className="border-2 m-2 rounded-md"/>
          <label htmlFor="in-stock">
            <input id="in-stock" type="checkbox" checked={onlyInStock} onChange={handleInStockChecked} />
            Only show products in stock
          </label>
        </form>
    )
}