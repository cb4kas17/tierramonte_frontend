import React from 'react';
import styles from './adminDisplayFieldItem.module.css';

function AdminDisplayFieldItem(props) {
      return (
            <li className={styles.itemContainer}>
                  <p>
                        {props.lname}, {props.fname} {props.mname}
                  </p>
                  <p>{props.role}</p>
            </li>
      );
}

export default AdminDisplayFieldItem;
