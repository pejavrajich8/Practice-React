import PackingListItem from "./PackingListItem";
import React from "react";
import { useState } from "react";

export default function PackingList() {
       const [items, setItems] = useState([
        { id: 1, name: "Clothes", isPacked: true },
        { id: 2, name: "Toiletries", isPacked: true },
        { id: 3, name: "Snacks", isPacked: false },
        { id: 4, name: "Books", isPacked: false },
       ])

       const handleToggleItem = (id) => {
        setItems(prev => prev.map(it => it.id === id ? 
            {...it, isPacked: !it.isPacked} : it));
  
    };



    return (
       <section>
        <h1>Peja's Packing List</h1>
        <ul>
            {items.map(item => (
                <PackingListItem 
                    key={item.id} 
                    name={item.name} 
                    isPacked={item.isPacked}
                    onToggle={() => handleToggleItem(item.id)}
                />
            ))}
        </ul>
       </section>

       
    )
}