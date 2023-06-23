import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

function ProductTable() {

    const [products, setproducts] = useState([]);

    useEffect(() => {
        
        loadData();
    
    }, [])

  
    const loadData = () => {
      
    }
    

  return (<>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Unit Price</th>
            </tr>
        </thead>
        <tbody>
            {
                products && products.map(item => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>  
                        <td>{item.unitPrice}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
  </>
  )
}

export default ProductTable