import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className="header">
            <Link to="/" className="header__title">
                <div className="header__title">
                    <h1 className="header__title--text">Sw Store</h1>
                </div>
            </Link>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li  className="nav__list--item">
                        <Link to="/spaceships" className="nav__list--link">
                            Spaceships
                        </Link>
                    </li>
                    <li  className="nav__list--item">
                        <Link to="/vehicles" className="nav__list--link">
                            Vehicles
                        </Link>
                    </li>
                    <li  className="nav__list--item">
                        <Link to="/planets" className="nav__list--link">
                            Planets
                        </Link>
                    </li>
                    <li className="nav__list--item">Cart</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;