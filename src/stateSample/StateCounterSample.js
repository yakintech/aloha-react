import React from 'react'
import { useState } from 'react'

function StateCounterSample() {

    console.log("State counter sample");

    const [counter, setcounter] = useState(0);

    const increase = () => {
        setcounter(counter + 1)
    }

    const decrease = () => {
        setcounter(counter - 1)
    }

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
        <button onClick={() => setcounter(0)}>Empty</button>

    </>
    )
}

export default StateCounterSample