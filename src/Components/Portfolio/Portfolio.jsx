import React from "react";
import "./Portfolio.css";
import Line__Star from "../line__star/Line__Star";
import portfolio1 from "../../assets/poert1.png";
import portfolio2 from "../../assets/port2.png";
import portfolio3 from "../../assets/port3.png";
export default function Portfolio() {
  return (
    <section className="portfolio min-vh-100 d-flex flex-column justify-content-center align-items-center py-5 gap-2">
      <div className="container">
        <h2 className="portfolio__title fw-bold text-uppercase display-5 text-center">
          portfolio component
        </h2>
        <Line__Star color="main-color" />
        <div className="portfolio__content pt-4 row row-gap-2 ">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="portfolio__item position-relative rounded-4 h-100 overflow-hidden">
              <figure className="portfolio__item-img rounded-4 overflow-hidden h-100">
                <img src={portfolio1} alt="portfolio" />
              </figure>
              <div className="portfolio__overlay rounded-4 d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <i className="portfolio__icon fa-solid fa-plus text-white fw-bold"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="portfolio__item position-relative rounded-4 h-100 overflow-hidden">
              <figure className="portfolio__item-img rounded-4 overflow-hidden h-100">
                <img src={portfolio2} alt="portfolio" />
              </figure>
              <div className="portfolio__overlay rounded-4 d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <i className="portfolio__icon fa-solid fa-plus text-white fw-bold"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="portfolio__item position-relative rounded-4 h-100 overflow-hidden">
              <figure className="portfolio__item-img rounded-4 overflow-hidden h-100">
                <img src={portfolio3} alt="portfolio" />
              </figure>
              <div className="portfolio__overlay rounded-4 d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <i className="portfolio__icon fa-solid fa-plus text-white fw-bold"></i>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="portfolio__item position-relative rounded-4 h-100 overflow-hidden">
              <figure className="portfolio__item-img rounded-4 overflow-hidden h-100">
                <img src={portfolio1} alt="portfolio" />
              </figure>
              <div className="portfolio__overlay rounded-4 d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <i className="portfolio__icon fa-solid fa-plus text-white fw-bold"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="portfolio__item position-relative rounded-4 h-100 overflow-hidden">
              <figure className="portfolio__item-img rounded-4 overflow-hidden h-100">
                <img src={portfolio2} alt="portfolio" />
              </figure>
              <div className="portfolio__overlay rounded-4 d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <i className="portfolio__icon fa-solid fa-plus text-white fw-bold"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="portfolio__item position-relative rounded-4 h-100 overflow-hidden">
              <figure className="portfolio__item-img rounded-4 overflow-hidden h-100">
                <img src={portfolio3} alt="portfolio" />
              </figure>
              <div className="portfolio__overlay rounded-4 d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
                <i className="portfolio__icon fa-solid fa-plus text-white fw-bold"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
