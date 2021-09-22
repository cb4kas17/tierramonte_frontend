import React from 'react';
import styles from './createBalanceContainer.module.css';
import SideNavBar from '../Layout/SideNavBar';
import CreateBalance from './CreateBalance';

function CreateBalanceContainer(props) {
      const navBarItems = [
            { id: 1, title: 'Profile', push: '/accountant' },
            { id: 2, title: 'Students', push: '/accountant/Students' },
            { id: 3, title: 'Payment Information', push: '/accountant/ViewGrades' },
      ];
      return (
            <div className={styles.createBalancePageContainer}>
                  <SideNavBar className={styles.navbarContainer} items={navBarItems} />
                  <CreateBalance className={styles.studentPage} id={props.id} />
            </div>
      );
}

export default CreateBalanceContainer;
