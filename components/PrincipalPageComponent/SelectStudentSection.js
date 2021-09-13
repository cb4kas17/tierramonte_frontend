import React, { useState } from 'react';
import styles from './selectStudentSection.module.css';
import Button from '../UI/Button';
import { useRouter } from 'next/router';
function SelectStudentSection(props) {
      const router = useRouter();
      const [search, setSearch] = useState('');
      const [yearLevel, setYearLevel] = useState('all');
      const searchBarHandler = (event) => {
            setSearch(event.target.value);
      };
      const filter = (list) => {
            if (yearLevel === 'all') {
                  return list.filter((data) => data.lastName.toLowerCase().indexOf(search) > -1);
            } else {
                  return list.filter(
                        (data) => data.yearLevel === yearLevel && data.lastName.toLowerCase().indexOf(search) > -1
                  );
            }
      };
      const yearLevelHandler = (event) => {
            setYearLevel(event.target.value);
      };
      return (
            <div className={styles.container}>
                  <h1 className={styles.header}>Students per year level</h1>
                  <div className={styles.filterContainer}>
                        <div className={styles.select}>
                              <p className={styles.dropdownName}>Year Level:</p>
                              <select name="department" id="department" onChange={yearLevelHandler}>
                                    <option value="all">All</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                              </select>
                        </div>
                        <input
                              className={styles.input}
                              type="search"
                              name="searchbar"
                              id="searchbar"
                              placeholder="Search Lastname"
                              onChange={searchBarHandler}
                        />
                  </div>

                  <div className={styles.columnName}>Students</div>
                  <ul className={styles.listContainer}>
                        <h4 className={styles.name}>Name</h4>
                        {/* {filter(props.data).map((item, i) => (
                              <SelectStudentItem key={i} data={item} />
                        ))} */}
                  </ul>
            </div>
      );
}

export default SelectStudentSection;
