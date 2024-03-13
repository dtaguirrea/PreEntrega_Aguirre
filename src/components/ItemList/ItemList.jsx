const ItemList = ({products}) => {
    return(
        <div>
            {
                products.map((product)=> {
                    return (
                        <div key={product.id}>
                            <img src={product.img} alt={product.name} style={{width:100}} />
                            <h2>{product.name}</h2>
                            <h3>Precio: ${product.base*100}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList
