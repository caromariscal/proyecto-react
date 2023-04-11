import './Navbar.scss'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import React, { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = ({black}) => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header" style={{backgroundColor: black ? '#000000' : '#600027c5'}}>
            <div className="header_container">
                <Link to="/">
                    <img src={logo} alt="logo" className='header_logo'/>
                </Link>

                <nav className="navbar">
                    <Link to="/" className="navbar_link">Inicio</Link>
                    <Link to="/productos/latam" className="navbar_link">LATAM</Link>
                    <Link to="/productos/emea" className="navbar_link">EMEA</Link>
                    <Link to="/productos/na" className="navbar_link">NA</Link>
                </nav>
    
                <CartWidget />
            </div>
            <div className='login-state container'>
                <h6>Bienvenido {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}