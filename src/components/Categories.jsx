import './Categories.css';
import categoriesNatural from '../assets/images/categories-natural.png';
import categoriesAccessories from '../assets/images/categories-accessories.png';
import categoriesArtificial from '../assets/images/categories-artificial.png';

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__block">
          <h2 className="categories__title">Categories</h2>
          <p className="categories__text">Find what you are looking for</p>
        </div>
      </div>
      <div className="categories__content">
        <div className="categories__item">
          <img
            className="categories__img"
            src={categoriesNatural}
            alt="flower"
          />
          <p className="categories__label">Natural Plants</p>
        </div>

        <div className="categories__item">
          <img
            className="categories__photo"
            src={categoriesAccessories}
            alt="flower"
          />
          <p className="categories__label">Natural Plants</p>
          <p className="categories__text">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="categories__item">
          <img
            className="categories__img"
            src={categoriesArtificial}
            alt="flower"
          />
          <p className="categories__label">Natural Plants</p>
        </div>
      </div>
    </section>
  );
}

export default Categories;
