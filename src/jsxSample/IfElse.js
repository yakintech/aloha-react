import React from 'react'

function IfElse() {

    let userStatus = true

    return (<>
        {
            userStatus == true ? <h1>User Online</h1> : <></>
        }
    </>

    )
}

export default IfElse


// userStatus == true ? <h1>User Online</h1> : <h1>Offline</h1>