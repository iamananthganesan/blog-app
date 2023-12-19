import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/' className='logoLink'>
                        {/* <img src='' alt='' /> */}
                        <h3>Logo Area</h3>
                    </Link>
                </div>
                <div className='links'>
                    <Link className='link' to='/?cat=art'>
                        <h6>Art</h6>
                    </Link>
                    <Link className='link' to='/?cat=science'>
                        <h6>Science</h6>
                    </Link>
                    <Link className='link' to='/?cat=technology'>
                        <h6>Technology</h6>
                    </Link>
                    <Link className='link' to='/?cat=cinema'>
                        <h6>Cinema</h6>
                    </Link>
                    <Link className='link' to='/?cat=design'>
                        <h6>Design</h6>
                    </Link>
                    <Link className='link' to='/?cat=food'>
                        <h6>Food</h6>
                    </Link>
                    <span>Logged user</span>
                    <span>Logout</span>
                    <Link to='/write' className='write'>Write</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar