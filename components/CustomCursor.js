// import { useEffect, useState } from 'react';
// import styles from './CustomCursor.module.css';

// const CustomCursor = () => {
//   const [cursorVisible, setCursorVisible] = useState(true);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const cursor = document.querySelector(`.${styles.cursor}`);
//       cursor.style.left = `${e.clientX}px`;
//       cursor.style.top = `${e.clientY}px`;
//     };

//     const handleMouseEnter = () => setCursorVisible(true);
//     const handleMouseLeave = () => setCursorVisible(false);

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseenter', handleMouseEnter);
//     document.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseenter', handleMouseEnter);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div className={`${styles.cursor} ${cursorVisible ? styles.visible : ''}`} />
//   );
// };

// export default CustomCursor;

import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(`.${styles.cursor}`);
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`${styles.cursor} ${cursorVisible ? styles.visible : ''}`}>
      <img src="/pencil.png" alt="Custom cursor icon" className={styles.icon} />
    </div>
  );
};

export default CustomCursor;
