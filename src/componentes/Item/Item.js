import './items.scss'
import { Link } from "react-router-dom"

export const Item = ( {item} ) => {

    return (
        <div className='col-3 m-1 text-center'>
            <img className="imagen" src={item.img} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Precio: <strong>${item.price}</strong></p>
            <Link to={`/detail/${item.id}`} className='btn btn-outline-info'>Ver más</Link>
        </div>
    )
}