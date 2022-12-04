import React from 'react'
import { Link } from 'react-router-dom'

function Welcome({ data }) {
    return (
        <>
            {/* Nav start */}
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <span className="navbar-text">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto d-flex">
                            <span className='text-white'>{data[0][0].firstName}{data[0][0].lastName}</span>
                            <Link style={{marginLeft:'100rem'}} to="/">Log out</Link>
                        </li>
                    </ul>
                </span>
            </nav>
            {/* Nav End */}

            {/* Display Data */}

            <h1>Welcome {data[0][0].firstName} {data[0][0].lastName}</h1>





        </>
    )
}

export default Welcome
