import { useState } from "react"
import Button from "../button/Button";

function Counter() {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => setCounter((counter) => counter + 1)}>click me ....:  {counter}</button>
         
        </div>
    )
}

export default Counter
