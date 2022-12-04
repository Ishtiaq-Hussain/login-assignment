import React,{useState}  from 'react'
import '../App.css';
import {Link} from "react-router-dom";


function SignUp({getData}) {

    const [inputField, setinputField] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password:''
    });
    const [arrData, setarrData] = useState([])
    const inputsHandler = (e) => {
        setinputField({ ...inputField, [e.target.name]: e.target.value })
    }
    const callback = (e) => {
        setarrData([...arrData, inputField])
        getData([...arrData,inputField]);
    }

   


    return (

        <div>

            <div className='container mt-5 logcon'>
                <div className='row '>
                    <div id="signupimg" className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                        
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                        <form className='form d-flex justify-content-center flex-column ml-5 '>
                            <div className="form-group">
                                <label>First Name
                                <input type="text" name='firstName' onChange={inputsHandler} className="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label >Last Name
                                <input type="text" name='lastName' onChange={inputsHandler} className="form-control border border-primary" id="last_Name" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label >User Name
                                <input type="email" name='userName' onChange={inputsHandler} className="form-control border border-primary" id="username" aria-describedby="emailHelp" placeholder="Enter First Name"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label >Password
                                <input type="password" name='password' onChange={inputsHandler} className="form-control border border-primary" id="exampleInputPassword1" placeholder="Password"/>
                                </label>
                            </div>
                            <Link to="/"><button type="submit" onClick={callback} className="btn border border-primary bg-white rounded">SIGN UP
                            </button></Link>
                            
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SignUp;
