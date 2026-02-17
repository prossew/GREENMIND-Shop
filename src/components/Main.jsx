import './Main.css';
import arrowIcon from '../assets/images/Arrow.svg';
import circleIcon from '../assets/images/Circle.svg';
import flowerIcon from '../assets/images/Flowers.png';
import vectorIcon from '../assets/images/Vector.svg';
import lensIcon from '../assets/images/Lens.svg';

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__background">
          <div className="main__icon">
            <img className="circle__icon" src={circleIcon} alt="Circle" />
            <img className="arrow__icon" src={arrowIcon} alt="Arrow" />
            <img className="flower__icon" src={flowerIcon} alt="Flower" />
          </div>
          <div className="main__block">
            <h1 className="main__title">Buy your dream plants</h1>
            <div className="main__stats">
              <div className="main__species">
                <p className="main__number">50+</p>
                <p className="main__label">Plant Species</p>
              </div>
              <div className="main__border"></div>
              <div className="main__customers">
                <p className="main__number">100+</p>
                <p className="main__label">Customers</p>
              </div>
            </div>

            <div className="main__form">
              <input type="text" placeholder="What are you looking for?" />
              <button className="lens__icon">
                <img src={lensIcon} alt="Search" />
              </button>
            </div>
          </div>
          <div className="vector">
            <img className="vector__icon" src={vectorIcon} alt="Vector" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
