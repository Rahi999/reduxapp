import React, { useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsFailureFunction, getProductsRequestFunction, getProductsSuccessFunction } from '../Redux/AppReducer/actions'
const Products = () => {


     const dispatch = useDispatch()
    const get = () => {
        dispatch(getProductsRequestFunction())
        axios.get(`http://localhost:8080/products`)
        .then((res)=> dispatch(getProductsSuccessFunction(res.data)))
        .catch((err)=> dispatch(getProductsFailureFunction()))
    }
    useEffect(()=> {
        get()
    },[])
   
    const {products,isLoading,isError} = useSelector((state)=> {
        return{
            products: state.AppReducer.products,
            isLoading: state.AppReducer.isLoading,
            isError: state.AppReducer.isError
        }
    })

    

  return isLoading ?
   (<h1>...Loading</h1>) : isError ?
    (<h1>...Something Went Wrong</h1>)
   : (
    <div>Products
        
  {products.length > 1 && 
  products.map((data)=> (
    <Link to={`/products/${data.id}`} key={data.id}>
        <div>
            {data.id}
        </div>
    </Link>
  ))
  }

    </div> 
  )
}

export default Products