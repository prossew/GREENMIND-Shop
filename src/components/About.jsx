import './About.css';
import largeAssortment from '../assets/images/Large-Assortment.svg';
import freeShipping from '../assets/images/Free-Shipping.svg';
import aboutSupport from '../assets/images/aboutSupport.svg';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__block">
          <p className="about__title">About us</p>
          <p className="about__text">
            Order now and appreciate the beauty of nature
          </p>

          <div className="about__product">
            <div className="about__card">
              <img className="about__img" src={largeAssortment} alt="icons" />
              <p className="about__name">Natural Plants</p>
              <p className="about__label">
                we offer many different types of products with fewer variations
                in each category.
              </p>
            </div>

            <div className="about__card">
              <img className="about__img" src={freeShipping} alt="icons" />
              <p className="about__name">Fast & Free Shipping</p>
              <p className="about__label">
                4-day or less delivery time, free shipping and an expedited
                delivery option.
              </p>
            </div>

            <div className="about__card">
              <img className="about__img" src={aboutSupport} alt="icons" />
              <p className="about__name">24/7 Support</p>
              <p className="about__label">
                answers to any business related inquiry 24/7 and in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
