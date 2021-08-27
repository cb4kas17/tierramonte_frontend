import React from 'react';

import SideNavBar from '../Layout/SideNavBar';
import AdminDisplayField from './AdminDisplayField';

import styles from './adminPageContainer.module.css';
function AdminPageContainer() {
      return (
            <div className={styles.adminPageContainer}>
                  <SideNavBar className={styles.navbarContainer} />
                  <AdminDisplayField className={styles.displayFieldContainer} />
            </div>
      );
}

export default AdminPageContainer;
