import './Navbar.scss'
import logo from './logo.png'
import { CartWidget } from './CartWidget/CartWidget'


export const Navbar = () => {

	return (
		<header className="header">
			<div className="header_container">
				<img src={logo} alt="logo" className="header_logo"/>

				<nav className="navbar">
					<CartWidget />
					<a href="#" className="navbar_link">Enlace 1</a>
					<a href="#" className="navbar_link">Enlace 2</a>
					<a href="#" className="navbar_link">Enlace 3</a>
				</nav>
			</div>
		</header>
	)
}