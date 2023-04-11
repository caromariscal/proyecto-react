import { ItemListContainer } from "../componentes/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "../componentes/Cart/Cart";
import { Routes, Route, Navigate } from 'react-router-dom'
import { Checkout } from "../componentes/Checkout/Checkout";
import { Navbar } from "../componentes/Navbar/Navbar"


export const Rutas = () => {

    return (
        <>
        <Navbar />

        <Routes>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
            <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/checkout" element={ <Checkout /> } />
            <Route path="*" element={ <Navigate to="/" /> }/>
        </Routes>
        </>
    )
}