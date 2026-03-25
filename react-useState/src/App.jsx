import { useState } from 'react';
import './App.css';

export default function App() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleDecrease = () => {
        setCount(prev => prev - 1);
    };

    return (
        <>
            <h1>React State</h1>
            <div className="counter">
                <h3>Counter: {count}</h3>
                <div className='btn-box'>
                    <button onClick={handleIncrease} className='btn'>Count Increase</button>
                    <button onClick={handleDecrease} className='btn'>Count Decrease</button>
                </div>
            </div>
        </>
    );
};