import React from "react";
import styles from "./Map.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = () => {
  return (
    <section className={styles.mapContainer}>
      <div className={styles.content}>
        <h2>Where you want to send the gift?</h2>
        <p>Add the location where you want to send the gift.</p>
      </div>
      <div className={styles.map}>
        <FaMapMarkerAlt />
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Kharadi,pune
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button class="dropdown-item" href="#">
                Shikrapur,pune
              </button>
            </li>
            <li>
              <button class="dropdown-item" href="#">
                Mumbai
              </button>
            </li>
            <li>
              <button class="dropdown-item" href="#">
                Delhi
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src="/images/location.jpg" alt="pune" />
      </div>
    </section>
  );
};

export default Map;
