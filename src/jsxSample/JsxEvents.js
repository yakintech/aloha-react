import React from 'react'

function JsxEvents() {

    const hello = () => {
        alert("Hello REACT JSX!")
    }


    const calc = (price) => {
        alert(price * 1.18)
    }

  return (<>
    <button onClick={hello}>Hello</button>
    
    <button onClick={() => hello()}>Hello</button>


    <button onClick={() => calc(100)}>Calc</button>


  </>)
}

export default JsxEvents