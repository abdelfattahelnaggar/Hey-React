import React from "react";
import "./About.css";
import Line__Star from "../line__star/Line__Star";

export default function About() {
  return (
    <>
      <section className="about min-vh-100 d-flex  flex-column justify-content-center align-items-center gap-2 text-white">
        <div className="container">
          <h2 className="about__title fw-bold text-uppercase display-5 text-center">
            about component
          </h2>
          <Line__Star color="white" />
          <article className="about__description d-flex flex-wrap justify-content-center align-items-center text-start gap-4">
            <p className="about__description-text">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="about__description-text">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
