import React from 'react';
import './header.scss';
import { BrowserRouter, Link} from 'react-router-dom';

const Header = (props) => {
    const {setCategory} = props;
    return(
        <header className="header">
            <BrowserRouter>
                <Link to="/" className="header__title">
                    <div className="header__title">
                        <h1 className="header__title--text">Sw Store</h1>
                    </div>
                </Link>
            </BrowserRouter>
            <nav className="header__nav">
                <ul className="nav__list">
                    <BrowserRouter>
                        <Link to="/spaceships" className="nav__list--item">
                            <li>Spaceships</li>
                        </Link>
                        <Link to="/vehicles" className="nav__list--item">
                            <li>Vehicles</li>
                        </Link>
                        <Link to="/planets" className="nav__list--item">
                            <li>Planets</li>
                        </Link>
                    </BrowserRouter>
                    <li className="nav__list--item">Cart</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;