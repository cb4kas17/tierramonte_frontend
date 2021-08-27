import React from 'react';
import styles from './sideNavBar.module.css';

function SideNavBar(props) {
      return (
            <div className={props.className}>
                  <ul className={styles.navContainer}>
                        <li>Profile</li>
                        <li>Create</li>
                        <li>List of User</li>
                  </ul>
            </div>
      );
}

export default SideNavBar;
