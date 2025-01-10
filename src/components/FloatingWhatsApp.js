import React from 'react';
import styles from '../styles/FloatingWhatsApp.module.css'; // Import styles for the floating icon

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/447919669718?text=Hi%20Xevy,%20I%E2%80%99m%20interested%20in%20about%20your%20services!"
      className={styles['floating-whatsapp']} // Use styles from the CSS module
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <img
        src="/img/others/whatsapp.png" // Replace with the path to your icon
        alt="WhatsApp"
      />
    </a>
  );
};

export default FloatingWhatsApp;
