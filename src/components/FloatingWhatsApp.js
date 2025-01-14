import React from 'react';
import styles from '../styles/FloatingWhatsApp.module.css'; // Import styles for the floating icon
import Image from 'next/image'; // Import Next.js Image component for optimization

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/447919669718?text=Hi%20Xevy,%20I%E2%80%99m%20interested%20in%20about%20your%20services!"
      className={styles['floating-whatsapp']} // Use styles from the CSS module
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <Image
        src="/img/others/whatsapp.png" // Path to your WhatsApp icon
        alt="WhatsApp"
        className={styles.icon} // Optionally add a class for custom styling
        width={50} // Adjust the width as needed
        height={50} // Adjust the height as needed
      />
    </a>
  );
};

export default FloatingWhatsApp;
