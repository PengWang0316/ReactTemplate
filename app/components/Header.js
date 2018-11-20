import React from 'react';

import styles from '../styles/Header.module.css';

export const Header = () => (
  <div className={styles.hero}>
    <div className={`${styles.frosty} ${styles.col10} ${styles.offset1} ${styles.textCenter}`}>
      <h1>Snap Schedule</h1>
      <h2>Snap, Crackle and Pop, tell us what is happening in your life and we'll manage the rest</h2>
    </div>
  </div>
);
export default Header;
