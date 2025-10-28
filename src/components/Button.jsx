import { useState } from 'react';
export default function Button({ children }) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('Count is ', count)
        setCount(count + 1);
    };

    console.log('rendered');
    return (
        <button 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
        >
            {children} {count}
        </button>
    );
}
