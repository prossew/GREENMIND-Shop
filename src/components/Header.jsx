import './Header.css';

import cartIcon from '../assets/images/Cart.svg';
import personIcon from '../assets/images/Person.svg';
import navIcon from '../assets/images/Nav.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <h1 className="header__title">
            <a href="#">GREENMIND </a>
          </h1>

          <nav>
            <ul className="header__list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a className="" href="#">
                  Products
                </a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>

          <div className="header__icons">
            <a href="#">
              <img src={cartIcon} alt="Cart" />
            </a>
            <a href="#">
              <img src={personIcon} alt="Person" />
            </a>
            <div className="header__border"></div>
            <a href="#">
              <img src={navIcon} alt="navigation" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
