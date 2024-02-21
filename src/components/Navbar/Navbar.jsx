import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <p style={{fontSize: 20}}><a>EcoTrade</a></p>
            <p><a>Frutas</a></p>
            <p><a>Verduras</a></p>
            <p><a>Otros</a></p>
            <CartWidget/>
        </nav>
    )
}

export default Navbar