import React, { useState, useEffect } from 'react';
import styles from './sectionPage.module.css';
import SectionItem from './SectionItem';
import Button from '../UI/Button';
import axios from 'axios';
import { useRouter } from 'next/router';

function SectionPage(props) {
      const [data, setData] = useState([]);
      useEffect(async () => {
            try {
                  const response = await axios.get('http://localhost:4000/api/teacher/mysections', {
                        withCredentials: true,
                  });
                  setData(response.data.sections_list);
                  console.log(response.data.sections_list);
            } catch (error) {
                  console.log(error);
            }
      }, []);
      return (
            <div className={styles.container}>
                  <h1 className={styles.header}>List of Sections</h1>

                  <div className={styles.columnName}>Sections</div>
                  <ul className={styles.listContainer}>
                        <div className={styles.columnTitlecontainer}>
                              <h4 className={styles.name}>Name</h4>
                              <h4 className={styles.name}>Grade</h4>
                              <h4 className={styles.name}>Subject</h4>
                        </div>

                        {data.map((item, i) => (
                              <SectionItem key={i} data={item} />
                        ))}
                  </ul>
            </div>
      );
}

export default SectionPage;
