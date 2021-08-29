import React from 'react';
import styles from './adminDisplayFieldItem.module.css';

function AdminDisplayFieldItem(props) {
      return (
            <li className={styles.itemContainer}>
                  <p>{props.name}</p>
                  <p>{props.role}</p>
            </li>
      );
}

export default AdminDisplayFieldItem;
