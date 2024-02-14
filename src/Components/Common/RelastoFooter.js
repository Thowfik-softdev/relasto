import React from "react";
import { Container} from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGoogleSquare
} from "react-icons/ai";
import "../Styles/Home.css";

const RelastoFooter = () => {
  return (
    <div>
      <footer className="py-5">
        <Container className=" d-flex justify-content-start align-items-start flex-wrap gap-5 py-5">
          <div>
            <div className=" d-flex align-items-center gap-3">
              <img src="/assets/logo.svg" alt="" />
              <h2 className="footer_brand ">Realsto</h2>
            </div>
            <address>
              59 Bervely Hill Ave, Brooklyn Town, New York, NY 5630, CA, US
            </address>
            <p>+(123) 456-7890</p>
            <p>info@mail.com</p>
            <div className="d-flex align-items-center gap-3">
              <AiFillFacebook className="icons_footer rounded-5 fs-3" />
              <AiFillInstagram className="icons_footer rounded-5 fs-3" />
              <AiFillYoutube className="icons_footer rounded-5 fs-3" />
              <AiFillGoogleSquare className="icons_footer rounded-5 fs-3" />
            </div>
          </div>
          <div>
            <h4 className="fw-bolder">Features</h4>
            <ul className="footer_ul">
              <li>
                <a className="footer_link" href="/">
                  Home v1
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Home v2
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Contact
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bolder">Information</h4>
            <ul className="footer_ul">
              <li>
                <a className="footer_link" href="/">
                  Listing v1
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Listing v2
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Property Details
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Agent List
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Agent Profile
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bolder">Documentation</h4>
            <ul className="footer_ul">
              <li>
                <a className="footer_link" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  FAQ
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  License
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bolder">Others</h4>
            <ul className="footer_ul">
              <li>
                <a className="footer_link" href="/">
                  Log in
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Enter OTP
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  New Password
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Reset Password
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Create Account
                </a>
              </li>
            </ul>
          </div>
        </Container>
        <div className=" d-flex justify-content-center align-items-center">
            <p>© 2022. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default RelastoFooter;
