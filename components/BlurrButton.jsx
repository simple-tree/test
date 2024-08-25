// components/BlurButton.js

import styles from './BlurrButton.module.css';

const BlurrButton = ({ text }) => {
  return (
    <div className={styles.buttonContainer}>
    <button className={styles.glassButton}>Grid</button>
    <button className={styles.glassButton}>List</button>
    <button className={styles.glassButton}>+</button>
  </div>
  );
};

export default BlurrButton;
