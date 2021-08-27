import styles from './mainnavbar.module.css';

import React from 'react';

function MainNavBar(props) {
      return (
            <div className={styles.mainNavBarContainer}>
                  <h1 className={styles.schoolHeader}>
                        Tierra Monte Integrated School
                  </h1>
                  <h2 className={styles.schoolHeaderDetails}>
                        Junior Highschool and Senior Highschool Student Portal
                  </h2>
            </div>
      );
}

export default MainNavBar;
