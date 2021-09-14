import React from 'react';
import styles from './sectionPageContainer.module.css';
import SideNavBar from '../Layout/SideNavBar';
import SectionPage from './SectionPage';

function SectionPageContainer() {
      const focus = 'third';
      const navBarItems = [
            { id: 1, title: 'Profile', push: '/teacher' },
            { id: 3, title: 'Schedule', push: '/teacher/Schedule' },
            { id: 4, title: 'Sections', push: '/teacher/Sections' },
      ];

      return (
            <div className={styles.sectionPageContainer}>
                  <SideNavBar className={styles.navbarContainer} items={navBarItems} highlighted={focus} />
                  <SectionPage className={styles.section} />
            </div>
      );
}

export default SectionPageContainer;
