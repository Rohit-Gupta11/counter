import React from "react";
import { useState } from "react";

const App = () => {

    const [count, setCount] = useState(0)

    return(
        <div className="counter">
            <h2 data-testid="output" >{count}</h2>
            <div className="btn-list">
                <button data data-testid="increment" onClick={() => setCount(prev => prev += 1)}>Click me</button>
                <button data-testid="decrement" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default App;