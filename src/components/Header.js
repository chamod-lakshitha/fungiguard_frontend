import { useState } from 'react';
import { FaFacebook, FaAngleDoubleRight } from 'react-icons/fa';
import { IoHomeOutline, IoLogoYoutube } from 'react-icons/io5';
import { FaSquareInstagram } from 'react-icons/fa6';
import { GoPerson } from 'react-icons/go';
import { TbMushroom } from 'react-icons/tb';
import { CiPhone } from 'react-icons/ci';
import './styles/header.styles.scss';

function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className="navbar__outer"
      style={{
        overflow: 'hidden',
        backgroundColor: '#E8F1F5',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="hero__outer">
        <div className="hero__image__outer">
          <img
            className="hero__image"
            src={require('../assets/created_cover.png')}
            alt="hero_image"
          />
        </div>
        <div className="navbar__inner container d-flex align-items-center justify-content-between position-relative">
          <span className="navbar__title fs-1 fw-bold">Fungi Guard 🍄</span>
          <ul className="navbar__list d-flex align-items-center justify-content-between m-0 p-0 list-unstyled">
            <li>
              <IoHomeOutline />
              &nbsp;Home
            </li>
            <li>
              <TbMushroom />
              &nbsp;Predict Edibility
            </li>
            <li>
              <CiPhone />
              &nbsp;Contact Us
            </li>
            <GoPerson className="user__icon fs-4 mt-1 ms-4" />
            <div
              className={`menu__toggle ${open ? 'open' : ''}`}
              onClick={handleToggle}
            >
              <div className="hamburger__menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="cross__menu">
                <span></span>
                <span></span>
              </div>
            </div>
          </ul>
        </div>
        <div className="hero__inner">
          <div className="hero__content container">
            <span className="hero__social d-inline-block mb-2">
              <FaFacebook
                className="social__icon"
                style={{ fontSize: '1.5rem', marginRight: '1rem' }}
              />
              <FaSquareInstagram
                className="social__icon"
                style={{ fontSize: '1.6rem', marginRight: '1.07rem' }}
              />
              <IoLogoYoutube
                className="social__icon"
                style={{ fontSize: '1.87rem' }}
              />
            </span>
            <h2 className="fw-bold pb-2">
              Guide to Safe<span style={{ color: '#f4978e' }}> Mushroom</span>
            </h2>
            <h4>
              Your trusted companion for mushroom safety and identification,
              ensuring informed and confident choices while foraging
            </h4>
            <button
              type="button"
              className="explore__btn fs-4 fw-bold px-3 py-2 border-0 rounded"
            >
              Explore more <FaAngleDoubleRight className="explore__icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
