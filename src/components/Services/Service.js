import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./Service.module.css";
import PersonalService from "./PersonalService";
let serviceInfo = [
  {
    iconSrc: "/images/register.png",
    label: "Register & select location of gift receiver",
    info: "Login to your account select location of gift receiver",
  },
  {
    iconSrc: "/images/address.png",
    label: "Filter the right gift for your loved ones",
    info: "Get gifting assistance for better gifting options",
  },
  {
    iconSrc: "/images/carbon.png",
    label: "select a gift and send it to the receiver address",
    info: "Gifts will be shipped and send to the receiver on time",
  },
];
const Service = () => {
  return (
    <>
      <section className={styles.services}>
        <h2 className={styles.title}>How it Works?</h2>
        <div className={styles.serviceContainer}>
          {serviceInfo.map(({ iconSrc, label, info }) => (
            <ServiceCard img={iconSrc} label={label} info={info} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Service;
