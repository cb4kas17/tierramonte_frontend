import React, { useState } from 'react';
import styles from './teacherPage.module.css';
import TeacherItem from './TeacherItem';
import Button from '../UI/Button';
import { useRouter } from 'next/router';
function TeacherPage(props) {
      const router = useRouter();
      const [search, setSearch] = useState('');
      const [role, setRole] = useState('all');

      const searchBarHandler = (event) => {
            setSearch(event.target.value);
      };

      const filter = (list) => {
            return list.filter(
                  (data) => data.lastName.toLowerCase().indexOf(search) > -1
            );
      };
      return (
            <div className={styles.container}>
                  <h1 className={styles.header}>Teachers</h1>
                  <div className={styles.createButtonContainer}>
                        <Button
                              className={styles.createButton}
                              onClick={() => {
                                    router.push(
                                          '/principal/Teacher/CreateTeacher'
                                    );
                              }}
                        >
                              &#65291; Create Teacher
                        </Button>
                  </div>
                  <div className={styles.filterContainer}>
                        <input
                              className={styles.input}
                              type="search"
                              name="searchbar"
                              id="searchbar"
                              placeholder="Search Lastname"
                              onChange={searchBarHandler}
                              value={props.searchBind}
                        />
                  </div>
                  <div className={styles.columnName}>Teachers</div>
                  <ul className={styles.listContainer}>
                        <h4 className={styles.name}>Name</h4>
                        {filter(props.data).map((item) => (
                              <TeacherItem key={item._id} data={item} />
                        ))}
                  </ul>
            </div>
      );
}

export default TeacherPage;
