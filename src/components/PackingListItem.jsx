import React from "react";

export default function PackingListItem({ name, isPacked, onToggle }) {
    let itemContent = name;
  if (isPacked) {
  itemContent = name + " ✅";
  }
  return (
    <button onClick={onToggle}>
      <li className="item">
        {itemContent}
      </li>
    </button>
  );
}