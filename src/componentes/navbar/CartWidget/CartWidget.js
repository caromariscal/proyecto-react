import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.scss'


export const CartWidget = () => {

    return (
        <div className="contenedor">
            <FontAwesomeIcon icon= {faCartShopping} className="fa-3x"/>
            <span class='cart cartStyle'> 2 </span>
        </div>
    )
}