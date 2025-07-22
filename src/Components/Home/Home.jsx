import React from "react";
import avatarImage from "../../assets/avataaars.svg";
import "./Home.css";
import Line__Star from "../line__star/Line__Star";
export default function Home() {
  return (
    <>
      <section className="home min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="home__content d-flex flex-column justify-content-center align-items-center gap-2 text-white">
            <figure className="home__img w-25 d-block mx-auto">
              <img src={avatarImage} alt="avatar" />
            </figure>
            <h1 className="home__title fw-bold">START FRAMEWORK</h1>
            <Line__Star color="white" />
            <p className="home__description">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
