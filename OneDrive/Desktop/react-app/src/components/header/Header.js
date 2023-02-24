import React, { useState } from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../CartContext";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const [openMenuItem, setOpenMenuItem] = useState(false);
  const [hideNav, setHideNav] = useState(true);
  const { total_item } = useCartContext();

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  function openMenu() {
    setOpenMenuItem(true);
    setHideNav(false);
  }
  function closeMenu() {
    setOpenMenuItem(false);
    setHideNav(true);
  }
 
  return (
    <>
      <div className="header">
        <div className="logoDiv">
          <h2>
            SHOPPING<span>ZONE</span>
          </h2>
        </div>
        <div className='navMenu'>
          <NavLink className='link' to="/">
            HOME
          </NavLink>
          <NavLink className='link' to="/about">
            ABOUT
          </NavLink>
          <NavLink className='link' to="/products">
            PRODUCTS
          </NavLink>
          <NavLink className='link' to="/contact">
            CONTACT
          </NavLink>
          {isAuthenticated && (
            <img
              style={{ width: "41px", borderRadius: "50%" }}
              src={user.picture}
              alt={user.name}
            />
          )}
          {isAuthenticated ? (
            <button
              className='loginBtn'
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              LOGOUT
            </button>
          ) : (
            <button
              className='loginBtn'
              onClick={() => loginWithRedirect()}
            >
              LOGIN
            </button>
          )}

          {isAuthenticated && (
            <NavLink
              className='link'
              to="/cart"
              style={{ fontSize: "27px", position: "relative" }}
            >
              <AiOutlineShoppingCart />
              <div className='cartValue'>{total_item}</div>
            </NavLink>
          )}
        </div>
        {hideNav ? <div className='menu'>
          <CgMenu onClick={openMenu} />
        </div>
        :
        <div className='menu'>
          <CgClose className='close' onClick={closeMenu} />
        </div>}
      </div>
      <div className={openMenuItem ? 'mobileNav' : 'mobileNav1'}>
        <div className='mobileNavItems'>
          {isAuthenticated && (
            <img
              style={{ width: "41px", borderRadius: "50%" }}
              src={user.picture}
              alt={user.name}
            />
          )}
          <NavLink className='link1' to="/" onClick={closeMenu}>
            HOME
          </NavLink>
          <NavLink className='link1' to="/about" onClick={closeMenu}>
            ABOUT
          </NavLink>
          <NavLink className='link1' to="/products" onClick={closeMenu}>
            PRODUCTS
          </NavLink>
          <NavLink className='link1' to="/contact" onClick={closeMenu}>
            CONTACT
          </NavLink>
          {isAuthenticated && (
            <NavLink
              className='link1'
              to="/cart"
              style={{ fontSize: "22px", position: "relative" }}
              onClick={closeMenu}
            >
              <AiOutlineShoppingCart />
              <div className='cartValue1'>{total_item}</div>
            </NavLink>
          )}
          {isAuthenticated ? (
            <button
              style={{ margin: "20px 0" }}
              className='loginBtn'
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              LOGOUT
            </button>
          ) : (
            <button
              className='loginBtn'
              onClick={() => loginWithRedirect()}
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
