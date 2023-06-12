import React from 'react'

function CssIntro() {

    var h1Style = {
        color:'red'
    }

  return (<>
    <h1 style={h1Style}>Cagatay</h1>

    <h1 style={{color:"turquoise", fontSize:250}}>Turkiye</h1>
  </>)
}

export default CssIntro