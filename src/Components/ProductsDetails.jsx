import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { saveData } from '../utils/LocalStorage';

const ProductsDetails = () => {
    const [d,setD] = useState([])
    const params = useParams();
  

    const get = () => {
        axios
        .get(`http://localhost:8080/products/${params.id}`)
      .then((res)=> setD(res.data))
      .catch((err)=> alert(err))
    }
    useEffect(()=> {
        get()
    },[])
    console.log(d)
    
  return (
    <div>ProductsDetails
    
    <div>{d.id}</div>

    </div>
  )
}

export default ProductsDetails