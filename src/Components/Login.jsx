import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { getLoginFailureFunction, getLoginRequestFunction, getLoginSuccessFunction } from '../Redux/AuthReducer/actions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      });
    
    const navigate = useNavigate()
                const handleOnChange = (e) => {
                    const {name,value} = e.target
                    setForm({
                        ...form,
                        [name]:value
                    })
                }
      const dispatch = useDispatch()
                const handleOnSubmit = (e)=> {
                    e.preventDefault()
                   
                    
                    if(form.email && form.password){
                        const payload = {
                            email : form.email,
                            password : form.password
                        }
                       dispatch(getLoginRequestFunction())
                       axios.post("https://reqres.in/api/login", payload)
                       .then((res)=> {dispatch(getLoginSuccessFunction(res.data))
                      alert("Succeed")
                      navigate("/")
                    })
                    .catch((err)=> {dispatch(getLoginFailureFunction())
                       alert(" Please Enter Valid Details")
                    })
                    
                    }
                    else {
                        alert("Enter Valid Details")
                    }
                }
  return (
    <div>Login

        <form onSubmit={handleOnSubmit}> 
            <input type="email"
             placeholder='Enter Email'
              name="email"
              value={form.email}
              onChange={handleOnChange}
            /> <br /> <br />
            <input type="password"
            placeholder='Enter Password'
            name="password"
            value={form.password}
            onChange={handleOnChange}
            />
            <br /> <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login