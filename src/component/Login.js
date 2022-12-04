import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';



function Login({ data }) {

    let navigate = useNavigate()
    const [inputField, setinputField] = useState({
        userName: '',
        password: ''
    });

    const inputsHandler = (e) => {
        setinputField({ ...inputField, [e.target.name]: e.target.value })
    }


    const click = () => {

        if (inputField.userName === '' || inputField.password === '') {
            alert("Please Fill Field First");
        }
        else {
            if (inputField.userName !== data[0][0].userName || inputField.password !== data[0][0].password){
                alert('signup first')
            }
            else  {
          
                navigate('/welcome');

            }
        }
    }

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <span className="navbar-text">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto ">
                            <Link className="nav-link text-white" to="signup">Sign UP</Link>
                        </li>
                    </ul>
                </span>
            </nav>

            <div className='container mt-5 logcon'>
                <div className='row '>
                    <div id="logimg" className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>

                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                        <form className='form d-flex justify-content-center flex-column ml-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">User Name</label>
                                <input type="email" name="userName" onChange={inputsHandler} className="form-control border border-primary " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password" onChange={inputsHandler} className="form-control border border-primary " id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            
                                <button type="button" onClick={click} className="btn border-primary bg-white rounded loginButton">Log In</button>
                            
                            <Link to="signup" className='text-center mt-5'>Sign Up</Link>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Login
