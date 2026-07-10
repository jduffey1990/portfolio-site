import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GenBackground from '../../Layout/GenBackground';
import Footer from '../../Layout/Footer';
import FoxDog from '../../images/FoxDog.png';
import Libby from '../../images/Libby.png';
import Marin from '../../images/Marin.png';
import Brad from '../../images/Brad.png';
import Brock from '../../images/Brock.png';
import LibbyLetter from '../../docs/Libby-Sparks-LOR.pdf';
import MarinLetter from '../../docs/Marin-Berg-LOR.pdf';
import BradLetter from '../../docs/Brad-Sparks-LOR.pdf';

const TESTIMONIALS = [
  {
    name: 'Libby Sparks',
    role: 'COO',
    company: 'Pomarium',
    image: Libby,
    quote: 'Jordan is an incredibly talented developer with a passion for problem-solving and learning. I am confident he will be an asset to any organization he joins, and I have no doubt he’ll continue to grow into a strong technical leader.',
    letter: LibbyLetter,
  },
  {
    name: 'Marin Berg',
    role: 'CTO',
    company: 'Pomarium',
    image: Marin,
    quote: 'One of his biggest contributions was single-handedly integrating our platform with Stripe. From researching and evaluating our options to fully implementing the solution he took complete ownership of the project. He stepped up and made my job as the product manager on the project so much easier. On top of that, he always went out of his way to document our processes, making onboarding and team collaboration much smoother for developers that were hired after him.',
    letter: MarinLetter,
  },
  {
    name: 'Brad Sparks',
    role: 'CEO',
    company: 'Pomarium',
    image: Brad,
    quote: 'Jordan took ownership of his role. We were a small team and to be successful, everyone had to go above and beyond their baseline minimum. Jordan did that consistently. He was dependable for the tasks he was expected to complete, but he also tackled items beyond his scope. He was curious to learn, hungry to contribute, and bought fully into the vision and mission of the company.',
    letter: BradLetter,
  },
  {
    name: 'Brock Sheldon',
    role: 'Mortgage Broker',
    company: 'The Mortgage Bureau',
    image: Brock,
    quote: "I do mortgages and don’t know much about websites, so when our initial website designer overcharged us upfront and $315/mo after that to host, my partner and I accepted without many questions. Then I spoke with Jordan. Next thing we know, a plan is in motion to save us money while also having more ownership over our online output. He collaborated with us to build our perfect website - and now we pay a mere $10/mo to host. Jordan shows integrity in an industry in which I imagine it is easy to take advantage of folks who don’t know how much these services should cost. I’d never work with anyone else again.",
    letter: null,
  },
];

function LetterModal({ testimonial, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fd-lor-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Letter of reference from ${testimonial.name}`}
    >
      <div className="fd-lor-modal" onClick={(e) => e.stopPropagation()}>
        <div className="fd-lor-modal__header">
          <span className="fd-lor-modal__title">
            Letter of Reference — {testimonial.name}
          </span>
          <div className="fd-lor-modal__actions">
            <a
              className="fd-lor-modal__open"
              href={testimonial.letter}
              target="_blank"
              rel="noreferrer"
            >
              Open in new tab
            </a>
            <button
              className="fd-lor-modal__close"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
        <iframe
          className="fd-lor-modal__frame"
          src={testimonial.letter}
          title={`Letter of reference from ${testimonial.name}`}
        />
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, onOpenLetter }) {
  return (
    <div className="fd-testimonial-card">
      <div className="fd-testimonial-card__header">
        <img
          className="fd-testimonial-card__avatar"
          src={testimonial.image}
          alt={testimonial.name}
        />
        <div>
          <div className="fd-testimonial-card__name">{testimonial.name}</div>
          <div className="fd-testimonial-card__role">
            {testimonial.role} · {testimonial.company}
          </div>
        </div>
      </div>
      <p className="fd-testimonial-card__quote">“{testimonial.quote}”</p>
      {testimonial.letter && (
        <button
          className="fd-lor-badge"
          onClick={() => onOpenLetter(testimonial)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Letter of reference
        </button>
      )}
    </div>
  );
}

function About() {
  const [openLetter, setOpenLetter] = useState(null);

  return (
    <>
      <GenBackground backgroundImage={FoxDog} compact>
        <h1 className="fd-hero__title fd-hero__title--page">About Jordan</h1>
      </GenBackground>

      <div className="fd-content">

        <section className="fd-section">
          <h2 className="fd-section__heading">Education</h2>
          <p className="fd-section__lead">
            Jordan earned a B.S. in Psychobiology from UCLA, then graduated summa cum laude
            from the University of Colorado School of Dental Medicine, followed by a General
            Practice Residency. After recognizing his true strengths and passions, he pivoted
            to software development — completing coursework through Udemy and{' '}
            <a className="fd-link" href="https://www.thinkful.com" target="_blank" rel="noreferrer">Thinkful</a>,
            a Forbes-recognized coding bootcamp.
          </p>
        </section>

        <section className="fd-section">
          <h2 className="fd-section__heading">Testimonials</h2>
          <div className="fd-testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard
                key={t.name}
                testimonial={t}
                onOpenLetter={setOpenLetter}
              />
            ))}
          </div>
        </section>

        <section className="fd-section fd-section--cta">
          <p className="fd-section__lead">
            Interested in working together?{' '}
            <Link to="/contact" className="fd-link">Get in touch</Link>.
          </p>
        </section>

      </div>

      {openLetter && (
        <LetterModal testimonial={openLetter} onClose={() => setOpenLetter(null)} />
      )}

      <Footer />
    </>
  );
}

export default About;
