import React, { useState } from 'react'

function UserList() {

    let usersData = [
        {
            name: "Çağatay",
            surname: "Yıldız",
            city: "Ankara"
        },
        {
            name: "Aykut",
            surname: "Arslan",
            city: "Antalya"
        }
    ]

    const [users, setusers] = useState(usersData)

    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')
    const [city, setcity] = useState('')


    const add = () => {

        let newUser = {
            name: name,
            surname: surname,
            city: city
        }

        setusers([...users, newUser])

    }

    return (<>
        <h1>Length: {users.length}</h1>
        <div>
            <label>Name: </label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label>Surname: </label>
            <input type='text' onChange={(e) => setsurname(e.target.value)} />
        </div>
        <div>
            <label>City: </label>
            <input type='text' onChange={(e) => setcity(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

        <hr></hr>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item) => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default UserList