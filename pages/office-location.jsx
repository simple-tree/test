import React from "react";
import styles from '../styles/OfficeLocation.module.css';

const OfficeLocation = () => {
  return (
    <div>
      <h1>Our Office Location</h1>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.57028416252!2d90.39980557595854!3d23.798311786934136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71001836335%3A0xaaebb736cbc14877!2sVOLUMEZERO%20Limited!5e0!3m2!1sen!2sbd!4v1720420089121!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        }}
      /> */}
       <div className={styles.mapContainer}>
     
      <div
        className={styles.mapWrapper}
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.57028416252!2d90.39980557595854!3d23.798311786934136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71001836335%3A0xaaebb736cbc14877!2sVOLUMEZERO%20Limited!5e0!3m2!1sen!2sbd!4v1720420089121!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        }}
      />
      <div className={styles.overlay}></div>
    </div>
    </div>
  );
};
export default OfficeLocation;