import React from 'react';
import styles from './preRegistrationList.module.css';

import PreRegistrationListItem from './PreRegistrationListItem';

function PreRegistrationList(props) {
      return (
            <div className={styles.container}>
                  <div className={styles.headerContainer}>
                        <h1 className={styles.header}>Pre-registrations</h1>
                        <input
                              className={styles.input}
                              type="search"
                              name="searchbar"
                              id="searchbar"
                              placeholder="Search lastname"
                        />
                  </div>
                  <div className={styles.columnName}>Pre-registrations</div>
                  <ul className={styles.listContainer}>
                        <h4 className={styles.name}>Name</h4>
                        {props.data.map((item) => (
                              <PreRegistrationListItem
                                    key={item._id}
                                    data={item}
                              />
                        ))}
                  </ul>
            </div>
      );
}

export default PreRegistrationList;
