// A very simple counter component using React
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(() => 0)}>Reset</button>

        </div>
    );
}

export default Counter;