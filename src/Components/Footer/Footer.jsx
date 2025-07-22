import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer d-flex flex-column justify-content-between align-items-center w-100 text-white">
      {/*--------------- Upper --------------- */}
      <div className="footer__upper d-flex  justify-content-around align-items-center flex-wrap w-100 text-center">
          <div className="footer__section footer__section--location">
            <h3 className="footer__title">LOCATION</h3>
            <p className="footer__text">2215 John Daniel Drive</p>
            <p className="footer__text">Clark, MO 65243</p>
          </div>

          <div className="footer__section footer__section--social">
            <h3 className="footer__title mb-3">AROUND THE WEB</h3>
            <div className="footer__social-icons d-flex align-items-center gap-3 justify-content-center">
              <i className="footer__social-icon fa-brands fa-facebook"></i>
              <i className="footer__social-icon fa-brands fa-twitter"></i>
              <i className="footer__social-icon fa-brands fa-linkedin-in"></i>
              <i className="footer__social-icon fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="footer__section footer__section--about">
            <h3 className="footer__title">ABOUT FREELANCER</h3>
            <p className="footer__text">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>

      {/*--------------- Lower --------------- */}
      <div className="footer__lower py-3 w-100 text-center">
        <p className="footer__copyright">
          Copyright &copy; 2025 Start Framework {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
