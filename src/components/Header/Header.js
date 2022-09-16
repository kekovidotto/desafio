import React, { useState, useContext } from 'react';
import './Header.css'

/* ---- icons ----*/
import Menu from '../svg/bars-solid.svg'
import Close from '../svg/xmark-solid.svg'
import Search from '../svg/magnifying-glass-solid.svg'
// import Cart from '../svg/cart-shopping-solid.svg'

/* ---Link (routes) -----*/
import {Link} from 'react-router-dom'
import { ProductContext } from '../../providers/contexts/ProductContext';

const Header = () => {

    const [menu, setMenu] = useState(false)
    const value = useContext(ProductContext)
    const [cart] = value.cart
    console.log(cart)
    const toggleMenu = () => {
      setMenu(!menu)
    }

    const styleMenu = {
      left: menu ? 0 : "-100%"
    }
    return (
        <header>
          <div className="menu-banner">15% DE DESCONTO NA SEGUNDA COMPRA - SAIBA MAIS</div>
          <div className="menu-container">
            <div className="menu" onClick={toggleMenu}>
              <img src={Menu} alt="" width="30"/>
            </div>
            <div className="logo">
              <h1>
                <Link to="/products">
                  <img src="../imgs/logo.png" alt=""></img>
                </Link>
              </h1>
            </div>
            <div className="menu-box">
              <ul style={styleMenu}>
                <li><Link to="/products">Camisas</Link></li>
                <li><Link to="/">Calças</Link></li>
                <li><Link to="/">Blusas</Link></li>
                <li><Link to="/">Calçados</Link></li>
                <li><Link to="/">Óculos</Link></li>
                <li><Link to="/">Acessórios</Link></li>
                <li><Link to="/">Outlet</Link></li>
                <li onClick={toggleMenu}>
                  <img className="menu" src={Close} alt="" width="30"/>
                </li>
              </ul>
              <div className="search-box">
                <input className="search-txt" type="text" placeholder="Buscar" />
                <a className="search-btn" href="#">
                  <img src={Search} alt="" width="22" height="22"/>
                </a>
              </div>

              <div className="icon-box">
                <div className="cart-icon">
                  <span>{value.countCart}</span>
                  <Link to="/cart">
                    <img src="../imgs/cart.png" alt="" width="22"/>
                  </Link>
                </div>
          
                <div className="login-icon">
                  <img src="../imgs/loginicon.png" alt="" width="22" />
                </div>
              </div>
            </div>
          </div>
      </header>
    )
}

export default Header