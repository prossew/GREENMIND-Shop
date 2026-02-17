import './BestSelling.css';
import bestsellingArrow from '../assets/images/Bestselling-arrow.svg';
import NaturalPlants from '../assets/images/Natural-Plants.png';
import ArtificialCactus from '../assets/images/Artificial-cactus.png';
import ArtificialPlants from '../assets/images/Artificial- Plants.png';

function BestSelling() {
  return (
    <section className="best-selling">
      <div className="container">
        <div className="best-selling__block">
          <div className="best-selling__title">
            <p>Best Selling Plants</p>
          </div>
          <div className="best-selling__text">
            <p>Easiest way to healthy life by buying your favorite plants </p>
          </div>
          <div className="best-selling__button">
            <button className="best-selling__button-btn">
              See more <img src={bestsellingArrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="best-selling__product">
          <div className="best-selling__card">
            <img src={NaturalPlants} alt="flower" />
            <p className="best-selling__name">Natural Plants</p>
            <p className="best-selling__price">₱ 1,400.00</p>
          </div>

          <div className="best-selling__card">
            <img src={ArtificialPlants} alt="flower" />
            <p className="best-selling__name">Artificial Plants</p>
            <p className="best-selling__price">₱ 900.00</p>
          </div>

          <div className="best-selling__card">
            <img src={ArtificialCactus} alt="flower" />
            <p className="best-selling__name">Artificial Plants</p>
            <p className="best-selling__price">₱ 3,500.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSelling;
