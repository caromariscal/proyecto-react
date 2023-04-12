import './Navbar.scss'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'


export const Navbar = () => {

    return (
        <header className="header">
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
        </header>
    )
}