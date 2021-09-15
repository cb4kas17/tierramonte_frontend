import React from 'react';
import styles from './encodeGradesContainer.module.css';
import SideNavBar from '../Layout/SideNavBar';
import EncodeGrades from './EncodeGrades';
function EncodeGradesContainer() {
      const navBarItems = [
            { id: 1, title: 'Profile', push: '/teacher' },
            { id: 3, title: 'Schedule', push: '/teacher/Schedule' },
            { id: 4, title: 'Sections', push: '/teacher/Sections' },
      ];
      return (
            <div className={styles.sectionPageContainer}>
                  <SideNavBar className={styles.navbarContainer} items={navBarItems} />
                  <EncodeGrades className={styles.section} />
            </div>
      );
}

export default EncodeGradesContainer;
