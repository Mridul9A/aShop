import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle navbar shrinking on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar_container ${scrolled ? 'scrolled' : ''}`}>
      <ul className={`${menuOpen ? 'active' : ''}`}>
        <li style={{ "--i": 1 }}>
          <NavLink to="/" exact activeClassName="active" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li style={{ "--i": 2 }}>
          <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li style={{ "--i": 3 }}>
          <NavLink to="/product" activeClassName="active" onClick={closeMenu}>
            Products
          </NavLink>
        </li>
        <li style={{ "--i": 4 }}>
          <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li style={{ "--i": 5 }}>
          <NavLink to="/cart" activeClassName="active" onClick={closeMenu}>
            <FiShoppingCart />
            <span className="cart-total">10</span>
          </NavLink>
        </li>
      </ul>

      <div className="mobile-menu" onClick={toggleMenu}>
        {menuOpen ? <CgClose /> : <CgMenu />}
      </div>
    </nav>
  );
};

export default Navbar;