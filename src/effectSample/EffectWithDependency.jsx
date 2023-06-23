import React, { useEffect } from 'react'
import { useState } from 'react'

function EffectWithDependency() {

    const [sayac, setsayac] = useState(0);
    const [sayac2, setsayac2] = useState(0);

    useEffect(() => {
        console.log('USE EFFECT! ');
    }, [])

    useEffect(() => {
        console.log('USE EFFECT with sayac dependency ');
    }, [sayac])


    return (<>
        <hr></hr>
        <div>
            <h1>Sayaç: {sayac}</h1>
            <button onClick={() => setsayac(sayac + 1)}>Arttır - 1</button>
        </div>
        <div>
            <h1>Sayaç2: {sayac2}</h1>
            <button onClick={() => setsayac2(sayac2 + 1)}>Arttır - 1</button>
        </div>
    </>
    )
}

export default EffectWithDependency