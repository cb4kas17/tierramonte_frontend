import React, { useState } from 'react';

import SideNavBar from '../Layout/SideNavBar';
import AdminDisplayField from './AdminDisplayField';

import { useRouter } from 'next/router';
import styles from './adminPageContainer.module.css';
function AdminPageContainer(props) {
      const [selectedID, setSelectedID] = useState();
      const focus = 'first';
      const navBarItems = [
            { id: 1, title: 'List of users', push: '/admin' },
            { id: 2, title: 'Create', push: '/admin/create' },
            { id: 3, title: 'Profile', push: `/admin/${selectedID}` },
      ];
      return (
            <div className={styles.adminPageContainer}>
                  <SideNavBar
                        className={styles.navbarContainer}
                        items={navBarItems}
                        highlighted={focus}
                  />
                  <AdminDisplayField
                        className={styles.displayFieldContainer}
                        data={props.data}
                  />
            </div>
      );
}

export default AdminPageContainer;
