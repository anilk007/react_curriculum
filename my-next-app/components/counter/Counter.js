"use client"

import { useState } from "react";

export default function Counter({users}) {

    console.log("users in Counter component :", typeof users);

    let [counter, setCounter] = useState(0);

    return (
        <>
            <button onClick={ () => setCounter(++counter) }>increment</button>
            <div>{counter}</div>
            <div>nunber of users : {users.length}</div>
        </>
    )

}