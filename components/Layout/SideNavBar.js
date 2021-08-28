import React from 'react';
import styles from './sideNavBar.module.css';
import Link from 'next/link';

import SideNavBarItems from './SideNavBarItems';
function SideNavBar(props) {
      return (
            <div className={props.className}>
                  <ul className={styles.navContainer}>
                        {props.items.map((item) => (
                              <SideNavBarItems
                                    key={item.id}
                                    title={item.title}
                              />
                        ))}
                  </ul>
            </div>
      );
}

export default SideNavBar;
