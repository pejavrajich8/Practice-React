import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((current) => {
            return current +1;
        });
        setCount((current) => {
            return current +1;
        });
        setCount((current) => {
            return current +1;
        });
    }

    return (
        <div>
            {count}
            <br/>
            <button onClick={handleClick}>+3</button>
        </div>
    )
}