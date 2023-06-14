import React, { useState } from 'react'

function InputState() {

    console.log('Componenet rendered! ');
    const [name, setname] = useState('')

    //butona tıkladığında inputtaki text al alert olarak göster
    
    const show = () => {
        alert(name)
    }

    return (<>

        <div>
            <label>Name: </label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={show}>Show</button>
        </div>

    </>)
}

export default InputState