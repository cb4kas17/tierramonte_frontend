import React from 'react';
import styles from './adminDisplayField.module.css';

import AdminDisplayFieldItem from './AdminDisplayFieldItem';
function AdminDisplayField(props) {
      console.log(props.data);
      return (
            <div className={styles.container}>
                  <div className={styles.headerContainer}>
                        <h1 className={styles.header}>List of Users</h1>
                        <input
                              className={styles.input}
                              type="search"
                              name="searchbar"
                              id="searchbar"
                              placeholder="Search lastname"
                        />
                  </div>

                  <div className={styles.columnName}>Students</div>
                  <ul className={styles.listContainer}>
                        <h4 className={styles.name}>Name</h4>
                        {/* {props.data.map((item) => (
                              <AdminDisplayFieldItem
                                    key={item.name}
                                    name={item.name}
                                    role={item.role}
                              />
                        ))} */}
                  </ul>
            </div>
      );
}

export default AdminDisplayField;
