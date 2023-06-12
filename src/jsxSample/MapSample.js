import React from 'react'

function MapSample() {

    let cities = ["Tokyo", "New York", "London", "Paris"]

    return (<>
        <ul>
            {
                cities.map((item) => <li>{item}</li>)
            }
        </ul>
        <ul>
            {
                cities.map((item) => {
                    return <li>{item}</li>
                })
            }
        </ul>
    </>
    )
}

export default MapSample