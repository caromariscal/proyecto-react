import './ItemListContainer.scss'


export const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="contenedor">
            <h2>Lista de Items</h2>
            <hr/>
            {greeting}
        </div>
    )
}