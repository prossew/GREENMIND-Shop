import { useState, useRef } from 'react';
import './Reviews.css';
import reviewsJohn from '../assets/images/reviewsJohn.png';
import reviewsAnna from '../assets/images/reviewsAnna.png';
import ratingStar from '../assets/images/rating-star.svg';

function Reviews() {
  const reviewData = [
    {
      name: 'John Doe',
      role: 'Youtuber',
      avatar: reviewsJohn,
      rating: '4.5',
      text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      name: 'Anna Doe',
      role: 'Youtuber',
      avatar: reviewsAnna,
      rating: '4.5',
      text: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
  ];

  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = currentX - startX.current;

    trackRef.current.classList.add('dragging');
    trackRef.current.style.transform = `translateX(calc(-${index * 85}% + ${diff}px))`;
  };

  const onTouchEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    trackRef.current.classList.remove('dragging');

    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX.current;

    if (diff < -50 && index < reviewData.length - 1)
      setIndex((prev) => prev + 1);
    else if (diff > 50 && index > 0) setIndex((prev) => prev - 1);
    else trackRef.current.style.transform = `translateX(-${index * 85}%)`;
  };

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title">What customers say about GREEMIND?</h2>

        <div
          className="reviews__slider"
          onMouseDown={onTouchStart}
          onMouseMove={onTouchMove}
          onMouseUp={onTouchEnd}
          onMouseLeave={onTouchEnd}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="reviews__track"
            ref={trackRef}
            style={{ transform: `translateX(-${index * 85}%)` }}
          >
            {reviewData.map((r, i) => (
              <div key={i} className="reviews__item">
                <div className="review-card">
                  <p className="review-card__text">{r.text}</p>

                  <div className="review-card__bottom">
                    <img
                      className="review-card__avatar"
                      src={r.avatar}
                      alt={r.name}
                    />

                    <div className="review-card__info">
                      <span className="review-card__name">{r.name}</span>
                      <span className="review-card__role">{r.role}</span>
                    </div>

                    <div className="review-card__rating">
                      <span className="review-card__rating-value">
                        {r.rating}
                      </span>
                      <img
                        className="review-card__star"
                        src={ratingStar}
                        alt="star"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Reviews;
