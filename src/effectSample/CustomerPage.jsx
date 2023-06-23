import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function CustomerPage() {

    const [companyName, setcompanyName] = useState('');
    const [contactName, setcontactName] = useState('');

    const [customers, setcustomers] = useState([]);


    useEffect(() => {
      loadData();
    }, [])
    


    const loadData = () => {
        axios.get("https://northwind.vercel.app/api/customers")
            .then(res => {
                setcustomers(res.data);
            })
    }


    const addNewCustomer = () => {

        let newCustomer = {
            companyName: companyName,
            contactName: contactName
        }

        axios.post('https://northwind.vercel.app/api/customers', newCustomer)
            .then(res => {
                loadData();
            })

    }

    return (<>

        <div>
            <label>Company Name:</label>
            <input type='text' value={companyName} onChange={(e) => setcompanyName(e.target.value)} />
        </div>

        <div>
            <label>Contact Name:</label>
            <input type='text' value={contactName} onChange={(e) => setcontactName(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addNewCustomer()}>Add</button>
        </div>

        <hr />

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers && customers.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>)
}

export default CustomerPage