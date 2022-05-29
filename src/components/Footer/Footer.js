import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.imgRotate}>
          <img
            src="/images/giftangelLogo.png"
            alt="gift angel logo"
            className={styles.rotate}
          />
        </div>
        <div className={styles.rowTwo}>
          <div className={styles.linkContainer}>
            <ul className={styles.links}>
              <li>
                <a href="#">About Us</a>
                <a href="#">Our Vision</a>
                <a href="#">Report</a>
                <a href="#">Contact us</a>
                <a href="#">Invest in vision</a>
              </li>
              <li>
                <a href="#">Add Store</a>
              </li>
              <li>
                <a href="#">site map</a>
                <a href="#">Privacy & policy</a>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
          <div className={styles.socialLinks}>
            <h2>Social Media Links</h2>
            <div className={styles.social}>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
            <img src="/images/giftangellogo.jpg" alt="gift angel logo" />
          </div>
          <p><sup>&copy;</sup>Gifting Angels,copyright protected by online legal india</p>{" "}
        </div>
        <div className={styles.imgRotate}>
          <img
            src="/images/giftangelLogo.png"
            alt="gift angel logo"
            className={styles.rotateRight}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
