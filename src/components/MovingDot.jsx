import { useState } from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });


    const handleMove = (ev) => {
        setPosition((currentPosition) => ({
            ...currentPosition,
            x: ev.clientX,
            y: ev.clientY,
        }));
    };

    return (
    
    <div 
        style={{
        position: 'realative',
        width: '100vw',
        height: '100vh',
    }}

    onPointerMove={handleMove}
    
    >
        <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            pointerEvents: 'none',
        }} />
    </div>
    );
}