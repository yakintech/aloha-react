import React from 'react'
import { useState } from 'react'

function StateIntro() {

    console.log('State intro component rendered!! ');

    const [name, setname] = useState('Cagatay')

    const changeName = () => {
        setname('Aykut')
    }

    return (<>
        <h1>{name}</h1>
        <button onClick={changeName}>Change Name</button>
    </>
    )
}

export default StateIntro



