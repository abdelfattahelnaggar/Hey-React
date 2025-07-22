import React from "react";
import Line__Star from "../line__star/Line__Star";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <section className="portfolio max-vh-100 d-flex flex-column justify-content-center align-items-center py-5 gap-2">
        <div className="container w-75">
          <h2 className="portfolio__title fw-bold text-uppercase display-5 text-center">
            contact section
          </h2>
          <Line__Star color="main-color" />
          <form action="" className="message__form w-75 mx-auto d-flex flex-column gap-4 my-5">
            <input
              id="userName"
              type="text"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
            <input
              id="userAge"
              type="number"
              placeholder="userAge"
              name="userAge"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
            <input
              id="userEmail"
              type="email"
              placeholder="userEmail"
              name="userEmail"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
            <input
              id="userPassword"
              type="password"
              placeholder="userPassword"
              name="userPassword"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
            <button type="submit" className="message__form-btn btn me-auto text-white fw-bold">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
