import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name,type,price,img,stock}) => {
    return (
        <article>
            <h4>Categoría: {type}</h4>
            <h3>{name}</h3>
            <img src={img} style={{width: 100}}/>
            <h4>{price}</h4>
            <ItemCount stock={10}/>
        </article>
    )
}

export default ItemDetail
