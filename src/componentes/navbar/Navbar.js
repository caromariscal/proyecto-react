import './Navbar.scss'
import logo from './logo.png'
import { CartWidget } from './CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {

	return (
		<header className="header">
			<div className="header_container">
				<img src={logo} alt="logo" className="header_logo"/>

				<nav className="navbar">
					<CartWidget />
					<Link to="/" className="navbar_link">Inicio</Link>
                    <Link to="/productos/latam" className="navbar_link">Equipos LATAM</Link>
                    <Link to="/productos/na" className="navbar_link">Equipos NA</Link>
                    <Link to="/productos/emea" className="navbar_link">Equipos EMEA</Link>
				</nav>
			</div>
		</header>
	)
}