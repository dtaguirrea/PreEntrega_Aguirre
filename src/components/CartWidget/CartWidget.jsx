import cart from "./assets/cart.png"

const CardWidget = () => {
    return(
        <button>
            <img src= {cart} alt="carrito" style={{height: 40}} />
            0
        </button>
    )
}

export default CardWidget