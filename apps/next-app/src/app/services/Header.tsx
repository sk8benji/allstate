"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  const whyUsLink = isHome ? "#why-choose-us" : "#why-us";
  const processLink = "#process";
  const contactLink = "#quote";

  const services = [
    { name: "Car Dealerships", path: "/car-dealerships-janitorial-services" },
    { name: "Medical Clinics", path: "/dental-office-janitorial-services" },
    { name: "Manufacturing Upkeep", path: "/industrial-manufacturing-janitorial-services" },
    { name: "Religious Facilities", path: "/church-cleaning-services" },
    { name: "School Cleaning", path: "/school-cleaning-services" },
    { name: "Shopping Malls", path: "/shopping-mall-cleaning" },
    { name: "Fitness Centers", path: "/fitness-center-cleaning" },
    { name: "Dance Studios", path: "/dance-studio-janitorial-services" },
    { name: "Office Buildings", path: "/offices-and-buildings-janitorial-services" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logoContainer}>
            <a href="/">
              <span className={styles.logoTitle}>ALLSTATE</span>
              <span className={styles.logoSubtitle}>Building & Office Maintenance</span>
            </a>
          </div>
          
          <div className={styles.navLinks}>
            {/* Services Dropdown */}
            <div className={styles.dropdownContainer}>
              <button className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                Services <span className={styles.chevron}>▼</span>
              </button>
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownGrid}>
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.path}
                      className={styles.dropdownItem}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href={whyUsLink} className={styles.navLink}>
              Why Us
            </a>
            
            <a href={processLink} className={styles.navLink}>
              Process
            </a>
            
            <a href={contactLink} className={styles.navLink}>
              Contact
            </a>
          </div>

          <a href="tel:+18188871134" className={styles.navPhoneBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.phoneIcon}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(818) 887-1134</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
