import React, { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import { BsSearch, BsFillHandbagFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  let [active, setActive] = useState(false);
  let iconSize = active ? 20 : 30;
  let inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src="/images/icon.png" alt="GIFTING ANGELS Logo" />
          </div>

          <form className={styles.searchInput}>
            <input ref={inputRef} type="text" placeholder="Search Gifts here" />
            <button className={styles.btnSearch}>
              <BsSearch />
            </button>
          </form>
          <div className={styles.location}>
            <p>Kharadi,Pune,india</p>
            <h3>
              <FaMapMarkerAlt />
            </h3>
          </div>
        </nav>
        <div className={styles.navList}>
          <button
            onClick={() => setActive((prev) => !prev)}
            className={styles.menuBtn}
          >
            <GiHamburgerMenu fontSize={100} />
          </button>
          <ul
            className={`${
              active ? styles.list + " " + styles.active : styles.list
            }`}
          >
            <li>
              <Link to="/">
                <AiOutlineHeart fontSize={iconSize} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <BsFillHandbagFill fontSize={iconSize} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaUserCircle fontSize={iconSize} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
