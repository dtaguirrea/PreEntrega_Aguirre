import classes from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <p style={{fontSize: 20}}><a>PokeTrade</a></p>
            <p>Planta</p>
            <p>Fuego</p>
            <p>Agua</p>
            <CartWidget/>
        </nav>
    )
}

export default Navbar