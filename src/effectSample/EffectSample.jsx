import axios from 'axios';
import React, { useEffect, useState } from 'react'

function EffectFix() {

    const [products, setproducts] = useState([]);


    //use efffect sadece "bir" kere çalışır.!!
    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })

    }, [])

    return (<>
        <ul>
            {
                products.map(item => <li>{item.name}</li>)
            }
        </ul>
    </>)
}

export default EffectFix