import React from 'react';
import Link from 'next/link';
import styles from './sideNavBarItems.module.css';
function SideNavBarItems(props) {
      return (
            <li className={styles.linkstyle}>
                  <Link href="">
                        <a>{props.title}</a>
                  </Link>
            </li>
      );
}

export default SideNavBarItems;
