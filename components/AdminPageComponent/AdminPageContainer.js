import React from 'react';

import SideNavBar from '../Layout/SideNavBar';
import AdminDisplayField from './AdminDisplayField';

import styles from './adminPageContainer.module.css';
function AdminPageContainer() {
      const navBarItems = [
            { id: 1, title: 'Profile' },
            { id: 2, title: 'Create' },
            { id: 3, title: 'List of users' },
      ];
      return (
            <div className={styles.adminPageContainer}>
                  <SideNavBar
                        className={styles.navbarContainer}
                        items={navBarItems}
                  />
                  <AdminDisplayField className={styles.displayFieldContainer} />
            </div>
      );
}

export default AdminPageContainer;
