import React from "react";
import { useState } from "react";

const App = () => {

    const [count, setCount] = useState(0)

    return(
        <div className="counter">
        <h2>{count}</h2>
        <div className="btn-list">
        <button onClick={() => setCount(prev => prev += 1)}>Click me</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
        </div>
    )
}

export default App;