import React from 'react'
import { useState } from 'react'

function StateArraySample() {

    let citiesData = ['izmir', 'Istanbul', 'Ankara', 'Bursa']

    const [cities, setcities] = useState(citiesData)

    return (<>
        <button onClick={() => setcities([])}>Empty</button>
        <h1>Cities Length: {cities.length}</h1>
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateArraySample