import React from 'react';
import facebookIcon from '../assets/images/facebook__icon.svg';
import instagramIcon from '../assets/images/instagram_icon.svg';
import twitterIcon from '../assets/images/twitter__icon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__name">GREENMIND</p>
            <p className="footer__text">We help you find your dream plant</p>
            <div className="footer__social">
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </div>
            <div className="footer__bottom">
              <p className="footer__copyright">
                2023 © All Rights Reserved | Terms of Use | GREENMIND
              </p>
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Information</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#">About</a>
              </li>
              <li className="footer__item">
                <a href="#">Product</a>
              </li>
              <li className="footer__item">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#">Community</a>
              </li>
              <li className="footer__item">
                <a href="#">Career</a>
              </li>
              <li className="footer__item">
                <a href="#">Our story</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#">Getting Started</a>
              </li>
              <li className="footer__item">
                <a href="#">Pricing</a>
              </li>
              <li className="footer__item">
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
