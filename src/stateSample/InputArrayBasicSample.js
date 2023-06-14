import React, { useState } from 'react'

function InputArrayBasicSample() {

    const [countryName, setcountryName] = useState('');
    const [countries, setcountries] = useState(['Türkiye'])

    const add = () => {
        if (countryName != "")
            setcountries([...countries, countryName])
    }

    return (<>
        <div>
            <label>Country:</label>
            <input type='text' value={countryName} onChange={(e) => setcountryName(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add New Country</button>
            <button onClick={() => setcountries([])}>Empty</button>

        </div>
        <div>
            <ul>
                {
                    countries.map(item => <li>{item}</li>)
                }
            </ul>
        </div>

    </>)
}

export default InputArrayBasicSample